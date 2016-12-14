---
layout: post
title: "The Good Sensor"
date: 2016-12-13 18:55
comments: false
author: "Yodit Stanton"
categories: sensor development
---
On a daily basis our customers and community ask us to recommend a sensor provider to buy from, you should ping me on hello@opensensors.io if you want us to recommend your sensor.  Often the requirement is vague, “I need an air quality sensor to put on my street for $100?” or “What sensors shall I use to understand my space usage?”.  My process of assessment has grown more refined over time because if the sensors we recommend are unsuitable or unusable our company’s reputation is also on the line by association.  


So we have come up with our own unscientific way to rate the quality of a sensor that should be applied simply.  Most large scale sensor rollout projects of 1K or more often have these requirements as well.  It’s possible that sensor providers that don’t rate highly using our criteria produce good sensors but getting the below right takes iteration and discipline in design and the likelihood is that the provider will a higher chance of being able to deliver.
 
Battery life
If a sensor is battery powered, the typical expected life of battery should be clearly stated.  Buyers will often want some explanation of what typical means for your sensor i.e. if it’s a PIR sensor have you calculated battery life based on being triggered once a day?  The last thing your customers wants to do is invest in a lot of sensors, plus the cost of installation in order to find out that the battery life is only % of what they expected as it will still cost them a lot of money to rip them out and return them. 


Bonus point for sensors that publish their battery status as standard so that the sensor owners can have some warning before changing.  


## Heartbeats
Sensors should tell people whether they are still alive or not periodically.  Depending on your battery and connectivity constraints, this can vary, the important thing is that the buyer should not find out a bunch of devices are not working because they haven’t been heard from in days or weeks.  Top tip; Heartbeats every 10-60 minutes when possible is sufficient, anymore and it ceases to be informative.


## Installation and maintenance procedure
In non consumer environments, the people installing and maintaining sensors are often not the technical design firms or manufacturers.  Does your device clearly tell people how to install it, do you have helper applications so that they don’t have to configure firmware? We are working on some solutions for this but more on this later; hint it’s all about enabling people to install sensors efficiently and a non technical installer being able to walk away knowing that the device has joined the network correctly. Does your sensor come with mounting and fittings?


Do people have to unscrew the casing to change batteries?  Have you tested this with people and verified it?


## Data Quality 
Quality in my definition means, is the data from your sensor easily understandable for someone that doesn’t know your domain.  The reality is that often manufacturers pass on the analogue value of the particular sensor and that is too low of an abstraction for most people trying to read it.  Battery voltage is a good example, during its life an AA battery will go from 1.5v to about 0.8v, but it follows a curve specific to the device and the battery. Understanding how this maps to a percentage or days of life is often complex. If it’s not possible to do much conversions or processing on your sensor or gateway, perhaps a handy explainer when people buy your device making them understand what the data means.


## Support
Please state clear terms for warranties and return procedures to protect your consumers. Consumer protection should naturally apply.


Finally developing high quality hardware is hard, I am always amazed at the skill and dedication it takes when hardware designers and engineers take an idea and get it to manufacturing stage.  We try to manage the community’s expectations on sensors they should buy vs the attitude of ‘just throw around cheap sensors’.  It would be better in terms of environmental sustainability and user experience to get into the habit of doing more with less sensor density.  For more on this, see Dr Boris Adryan’s [excellent blog post](http://iot.ghost.io/less-can-be-more-in-sensor-deployment/)


I have purposefully not mentioned security in this post as security assessments come with a lot of complexity, will aim to write up on this sometime soon.


Many Thanks to Toby Jaffey for editing.
