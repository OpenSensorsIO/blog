---
layout: post
title: "IOT in the city"
date: 2014-03-12 13:41
comments: false
author: "Yodit Stanton"
categories: Future-Cities, Architecture
---

## Architecting Internet of Things Software for Cities

We are often asked to advise on how best to build scalable products for
the Internet of Things, specifically to provide City wide services. City scale projects, also marketed as Smart or Future
Cities, within an IOT context are projects that combine aspects of the physical
and digital worlds to provide infrastructure and
services. Inherently these projects have to tackle the challenge of
scalable software management as well as distributed data management i.e. Big Data.

Among the projects we are involved in are parking management
applications using parking sensors, real time analysis of pollution data from
pollution monitors and using telemetry data to map routes for people with
disabilities.

The problem space that connected devices are used in is diverse but
technologically speaking the architectural model is fairly common. There are usually
a number of different types of sensors each measuring distinct factors
which in turn are listened to by either other devices or
software services. In the parking situation, a connected car can
listen to sensors in a particular area in order to ascertain
the nearest parking availability.  Any serious IOT project will
quickly evolve to having thousands, if not millions, of devices
connected to it.  It will also need to be able to cope with potentially millions of listeners such as the
individual cars in the parking scenario.

## Architectural Model
We strongly favour the Publish/Subscribe (aka PUB/SUB) model of
building software in IOT.  In pub/sub, "Publishers" are usually the
devices but can also be data from smart phones and the "Subscribers" are all the
services that care about the data that the device is emitting.  In the PUB/SUB
model devices can have one or many subscribers and subscribers
can listen to one or many publishers. This is essential when building
systems for Cities.  Let's take the example of pollution monitoring,
there are many potential groups interested in this data from environmental groups to those
concerned by the impact on health.  Each group should be free to build
applications that are relevant to them without being impacted by the
needs of the other subscribers.  You do not want a situation where
each pollution monitor can only talk to one monolytic, and
often proprietary, system thereby needing to set up another pollution monitor on
the same street for each group which is frankly impractical and
wasteful. The PUB/SUB model eliminates this situation. 

Scaling this model has been our obsession since the start of
opensensors.IO.  We have open sourced our engine to enable others to
be able to also create scalable services. [Azondi](https://github.com/OpenSensorsIO/azondi) is our
[MQTT](http://opensensors.io/) based engine to enable processing device data at
scale.

All of this has been possible by standing on the shoulders of giants
using battle test components.  Our MQTT broker relies on [Netty](http://netty.io/) in order to provide an extensible
broker.  Netty is used by a host of tech companies to build various
real time systems such as Twitter, Facebook and Avast.  We also rely on
[Project Reactor](https://github.com/reactor/reactor) to get a non-blocking
dispatcher for event driven programming based on the
[Reactor Pattern](http://en.wikipedia.org/wiki/Reactor_pattern). This dispatcher acts as a kind of sorting office between devices and their
listeners. It receives all messages and 'delivers' messages to
interested listeners.

The most important motivation behind the technological choices we made to build
Azondi is the need to avoid polling at all costs. When you have
potentially 100,000s of services listening to each device message you
never want a situation where you are being simultaneously hit by requests.

## Model of a City
Putting the above theory into a real world model, below is a diagram
on how Azondi would be implemented in reality.  Let us pretend that we are processing device data from
disparate sources for the London Borough of Camden.

In the example, there are environmental monitors that measure
pollution and noise as well as a weather station monitoring temperature and
wind speeds.  In addition, cars send information about traffic
 in their vicinity. On the other hand, Mary's car is listening for local parking
information and Sophie's phone listens to information on noise,
pollution, temperature and energy readings.  Both Mary's car and Sophie
would have the option to filter the information they receive
i.e. local information only or when pollution hits dangerous levels.  Camden Council cares about all of the data sets and
would probably have a dashboard or a decision support system.

## Illustration of Azondi in action
Click on each device to get it to publish (random) data and watch the
subscribers receive their information.

<iframe src="http://city-model.s3-website-us-east-1.amazonaws.com/#" height=800px width=900px></iframe>

