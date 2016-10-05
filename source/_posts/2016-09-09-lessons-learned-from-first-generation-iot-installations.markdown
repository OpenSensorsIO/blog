---
layout: post
title: "Lessons Learned from First Generation IoT Installations"
date: 2016-09-09 08:06
comments: False
categories: networks, lora
---

At first glance,Wi-Fi-based sensors seems like a good choice for a non consumer facing sensor network, however, we have discovered that Wi-Fi has some significant drawbacks.
 
## Access
 
One of the biggest drawbacks to Wi-Fi enabled sensors in a corporate environment at many of the companies is gaining access. Corporate IT often has valid security concerns of hundreds if not thousands of sensors joining the network and have deployed corporate firewalls that block any access.  Often this means that we are not allowed to spin up our own Wi-Fi network in order to have a gateway for a customer’s IoT sensor network. If IT has already deployed a Wi-Fi network they are rarely willing to provide the passwords to allow the IoT network devices and gateways to take advantage of it.  Relying on corporate Wi-Fi can make on-site installations and maintenance extremely complex and painful. The whole project becomes dependent on the goodwill of a network administrator for access every time maintenance needs to be performed. 
 
## Power
 
Wi-Fi has good transmission range but that comes with a cost of high power usage. With a short battery life, maintenance costs for Wi-Fi sensors are higher than low-power alternatives. One wireless protocol that is we see in many successful deployments is LoRa because it offers long transmission range at a much lower battery usage than Wi-Fi.
 
Moving to LoRa and other long range protocols 
 
If you follow our blog and publications, you will notice we have been talking a lot about network technologies, this isn’t a coincidence.  We have spent a long time evaluating and piloting these stacks with our community.

 Network access and battery constraints are driving the move to long range networks and off WiFi for many IoT installations. LoRa is working well for us so far for a number of use cases most of our customer spin up a private network.  The ecosystem of providers is maturing and we are finding a lot of companies who are adopting existing sensors for their networks Gateway providers such as [Multi Tech](http://www.multitech.com/brands/multiconnect-conduit) provide good support for the long tail of small scale (> 250 sensor installs) hardware providers to thrive. 

LoRa is a wireless protocol that promises between two and five kilometers transmission range between sensors and gateway, if you haven't already done so please read our introduction to [what it is](http://blog.opensensors.io/blog/2016/07/05/what-is-lorawan/). With a separate LoRa network, facilities and/or operations can install and manage the whole operation without the access and security issues of using the corporate Wi-Fi network. A typical network will have hundreds of sensor devices sending messages to a gateway. The LoRa gateway is a self contained system, we can have the LoRa network sit completely outside of the corporate firewall (GSM) and minimize IT security concerns.
 
One LoRA gateway can normally cover an entire real estate. This can significantly reduce infrastructure, deployment, and administration costs compared to other shorter range wireless options like Zigbee or Bluetooth that requires complex installs.  Our aim is to have a system that non technical engineers can roll out and support, more on how to do this on later blog posts, but in most cases the OpenSensors team is the equivalent of '2nd line support' to the onsite team who have intergrated our apis to their helpdesk ticketing systems etc. 
 
LoRa networks can be public or private. An example of a public network is The Things Network, we continue to work with and support that community.  Most current commercial projects are running private networks at this time but will be interesting to see how that evolves over time.  

To conclude, LoRa is working well for us at the moment but we will keep researching other networks to enable us to understand the pros and cons of all the network providers.  Sigfox is a very interesting offering that we will properly test over the next few months, for example. 
