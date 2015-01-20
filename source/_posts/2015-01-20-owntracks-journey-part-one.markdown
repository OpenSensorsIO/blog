---
layout: post
title: "OwnTracks Journey - Part One"
date: 2015-01-20 12:56
comments: true
author: "James Moulding"
categories: OwnTracks, Beginner
---

Today we’re going to look at using the OwnTracks app within the OpenSensors platform. ['OwnTracks' (formerly MQTTitude)](http://owntracks.org) allows you to keep track of your connected devices location. The app is open-source and uses open protocols for secure and private communications. First off we’ll start by installing the OwnTracks app on our device, I’m using a Nexus tablet for this attempt. Also, make sure your device *Location Data is enabled*. Whilst we’re waiting for that to sort itself out, let’s open up OpenSensors.io.

If you haven’t already, create a new account, when you’re in - select Devices on the nav bar to the left. You should see the interface below.

<img src="{{ root_url }}/images/createdev.jpg" />

Click *Create New Device*, give it a name and, optionally, a description (what is your device?). Importantly, choose whether you’d like to publish your data as public Open Data or Private Data. Whilst we’re on this screen, take note of the *Client ID* and *Password*, if you forget or lose your device password, don’t worry, just come back to [this page](https://opensensors.io/devices), select your device and click the small padlock icon on the far right next to the bin, this will reset your password.

Now we’ve got that sorted, let’s run OwnTracks on our device. You should see this screen. In the top right we see two buttons, on the left is the Report button, essentially submitting data to our server, and the right, options. Click options and then preferences.

<img src="{{ root_url }}/images/owntracks.png" /> alongside <img src="{{ root_url }}/images/owntrackspref.png" />

As you can see we’re currently disconnected from any network, let’s change that. Firstly, click *Advanced* and select *Advanced connection preferences*. Now go back to preferences menu and click *Connection* and input the following - input your own *username*, *Device ID* and *Device Password* as displayed earlier on OpenSensors.io device manager, and type OpenSensors.io as *Host* and 1883 as *Port Number*. Change *Connection Security* to None. These are OSIO’s settings. You can go back to Preferences and change the automatic reporting interval etc.

<img src="{{ root_url }}/images/owntracksconnection.png" />

We’re all set. Now let’s go back to our devices page, and scroll down to the *Events* box, whereas before it looked this…

<img src="{{ root_url }}/images/events1.jpg" />

We should now be publishing data - test your new connected device, publishing your location data by pressing the *Report* button on the OwnTracks main screen. Each time you submit data through the app you should see…

<img src="{{ root_url }}/images/eventssuccess.jpg" />

You’re now publishing Open Data through the OpenSensors.io messaging broker! From this you are able to create smart apps and projects using your data, all we need to do now is have your app and project subscribe to our twitter hashtags of the IoT, topics - but you’ll have to wait and see until part two of our OwnTrack journey!
