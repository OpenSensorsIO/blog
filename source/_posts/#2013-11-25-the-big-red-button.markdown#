---
layout: post
title: "The Big Red Button"
date: 2013-11-25 23:48
comments: false
author: "Malcolm Sparks"
categories: Tutorial, Big-Red-Button
---

I have a development harness for my Clojure systems called [Jig](https://github.com/juxt/jig?source=c). Jig has
a feature that allows me to teardown and reinitialize the entire state
of the system, while loading in any code that has changed since the last
reset. It allows for a rapid development experience approaching that of
Smalltalk and LISP systems a few decades ago.

Along with resets, there are other notable signals that are appropriate
for the ceremony of pushing a 'big red button' (besides launching
missiles at your enemy!).

- signalling that a new code release should be deployed into production
- telling your family that dinner is ready
- instructing the quadrocopter to ignore all further signals from the
  trainee pilot, level off and gracefully descend to the ground

<img src="{{ root_url }}/images/Big_Red_Button.jpg" />

The Big Red Button at opensensors was bought from [Dream Cheeky](http://www.dreamcheeky.com/big-red-button)

## Installing Mosquitto

As a pre-requisite, we'll need to install an MQTT client.

For this, install *mosquitto*, an open source MQTT broker which comes
with command-line client tools for publishing messages. Full
instructions are here: http://mosquitto.org/download/

## Detect button presses in Linux

The Big Red Button doesn't come with a dedicated Linux driver, so we
must write one. These instructions assume you're using Arch Linux, if
you're using a different distribution then you may have to adjust them
accordingly (file locations may be slightly different).

### Adding the ~/dev/big_red_button~

First we need to create a Unix =/dev= character device that we can use to
communicate with the Big Red Button.

Plug the big red button into a spare USB port and run the command
=lsusb=. If your big red button is attached, you should an entry like
this :-

    $ lsusb
    Bus 001 Device 003: ID 1d34:000d Dream Cheeky Dream Cheeky Big Red Button

We need to find the =ID_MODEL= of the device. We can do this by running
=udevadm= and try disconnecting and reconnecting the device.


    # udevadm monitor --environment udev | grep ID_MODEL=
    ID_MODEL=DL100B_Dream_Cheeky_Generic_Controller
    ID_MODEL=DL100B_Dream_Cheeky_Generic_Controller
    ID_MODEL=DL100B_Dream_Cheeky_Generic_Controller

Or we can find out with the =udevadm= command.
    # udevadm info /dev/bus/usb/001/003
    P: /devices/pci0000:00/0000:00:1a.0/usb1/1-1/1-1.3
    N: bus/usb/001/061
    S: big_red_button
    E: BUSNUM=001
    ...
    E: ID_MODEL=DL100B_Dream_Cheeky_Generic_Controller

In this case, 001 and 003 correspond to the Bus and Device returned by
=lsusb= respectively.

Now we can pattern match on that udev environment value. As root, create
a file =/etc/udev/rules.d/50-big-red-button.rules= with the following
content, making sure that the ENV{ID_MODEL} entry matches the correct
string that we've just found using :-

    ACTION=="add", ENV{ID_MODEL}=="DL100B_Dream_Cheeky_Generic_Controller", SYMLINK+="big_red_button", MODE="0666", RUN+="/usr/bin/mosquitto_pub -h mqtt.opensensors.io -t /my/big/red/button -m Add"
    ACTION=="remove", ENV{ID_MODEL}=="DL100B_Dream_Cheeky_Generic_Controller", RUN+="/usr/bin/mosquitto_pub -h mqtt.opensensors.io -t /my/big/red/button -m Add"

This causes a new device to be added, =~/dev/big_red_button~=, with a
mode of 666 so that we can read and write from it without being
root. Also, every time the device is connected and disconnected, MQTT
messages are published to the topic =/my/big/red/button= at
OpenSensorsIO. We'll use this topic for this example, but you should set
this to something unique.

Reload the udev rules with the following command :-

    udevadm control --reload-rules

To test, disconnect the big red button (pull out the USB plug) and
reconnect it. Each time you do this you should see the device
=~/dev/big_red_button~= disappear and reappear.

### Writing the device driver

We need to write some simple code to control the device which will print events to standard out.

Copy and paste the following code into a file, for example, =~big-red-button.c~=

    /*
    ,* Copyright © 2013, Malcolm Sparks <malcolm@congreve.com>. All Rights Reserved.
    ,*
    ,* A program to convert USB firing events from the Dream Cheeky 'Big Red Button' to MQTT events.
    ,*/

    #include <fcntl.h>
    #include <stdio.h>
    #include <string.h>
    #include <stdlib.h>

    #define LID_CLOSED 21
    #define BUTTON_PRESSED 22
    #define LID_OPEN 23

    int main(int argc, char **argv)
    {
      int fd;
      int i, res, desc_size = 0;
      char buf[256];

      /* Use a udev rule to make this device */
      fd = open("/dev/big_red_button", O_RDWR|O_NONBLOCK);

      if (fd < 0) {
        perror("Unable to open device");
        return 1;
      }

      int prior = LID_CLOSED;

      while (1) {
        memset(buf, 0x0, sizeof(buf));
        buf[0] = 0x08;
        buf[7] = 0x02;

        res = write(fd, buf, 8);
        if (res < 0) {
          perror("write");
          exit(1);
        }

        memset(buf, 0x0, sizeof(buf));
        res = read(fd, buf, 8);

        if (res >= 0) {
          if (prior == LID_CLOSED && buf[0] == LID_OPEN) {
             printf("Ready to fire!\n");
             fflush(stdout);
          } else if (prior != BUTTON_PRESSED && buf[0] == BUTTON_PRESSED) {
            printf("Fire!\n");
            fflush(stdout);
          } else if (prior != LID_CLOSED && buf[0] == LID_CLOSED) {
            printf("Stand down!\n");
            fflush(stdout);
          }
          prior = buf[0];
        }
        usleep(20000); /* Sleep for 20ms*/
      }
    }

Compile the file
    $ cc big-red-button.c -o big-red-button


and run the executable, testing it by opening the lid on your device and pressing the (big red) button (a few times!). You should get output looking a bit like this :-


    $ ./big-red-button
    Ready to fire!
    Fire!
    Fire!
    Fire!
    Fire!
    Stand down!

If so, great, we now have a functioning device.

    $ ./big-red-button | mosquitto_pub -l -h mqtt.opensensors.io -t /my/big/red/button

Now go to http://opensensors.io and tune into the topic. Open the lid,
and start pressing the button. If you've done everything correctly,
you'll see your messages in your browser.

Have fun!
