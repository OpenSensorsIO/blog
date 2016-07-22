---
layout: post
title: "The Path to Smart Buildings"
date: 2015-10-07 10:14
categories: Buildings, data infastructure
author: "Simon Troup"
---

Google ['principles of good architectural design'](http://lmgtfy.com/?q=principles+of+good+architectural+design#seen)  and you’ll get links to technology, to buildings and all manner of other services. But it’s hard to find principles of design for the tech services that facilitate smart buildings. Let’s remind ourselves what a smart building is with the help of [sustainable tech forum](http://sustainabletechnologyforum.com/from-inspired-to-awful-8-definitions-of-smart-buildings_18078.html); ‘The simple answer is that there’s automation involved somehow that makes managing and operating buildings more efficient’. So the need is well documented but we want to bridge to the ‘practice of designing and constructing buildings’, after all that’s what architecture is about.

Opensensors hosted its first Smart Building Exchange (SBeX) event in September, and we are grateful to the panelists and attendees who made it such a success. Our goal was to bridge the gap between widely documented features of smart buildings and the tech that underpins it. Through our workshops we decomposed tenant needs and identified services to support them using the [value proposition canvas](http://www.businessmodelgeneration.com/canvas/vpc). We borrow from lean product design principles since building operators need to rapidly innovate using processes inherited from startups. Mapping the pains and gains of users to the features and products of the tech stack revealed a common theme, data infrastructure. Data is the new commodity that new services will be built upon, some will be open and others private, but data will be the currency of the next generation smart building.

<img src="{{ root_url }}/images/sbex-summary.png"/>

Take integrated facilities management (IFM) where data serves the desire to deliver better UX at a lower cost with fewer outages. IFM has pivoted from a set of siloed software services to a set of application services overlaid upon a horizontal data infrastructure. For example:

* Data science services will develop to identify ‘rogue’ devices operating outside expected patterns, they will identify assets that need inspection or replacement and schedule maintenance works using time and cost optimisation routines. 
* Digital concierge services will use personal devices, location based technology and corporate data (calendar and HR data) to optimise both user experience and spacial allocation.

So can we identify a tech architecture to support this pivot from monolithic apps? Data services facilitated by a central messaging backbone allows the complexity of building services to be broken down and tackled one service at a time, lowering the risk failure and allowing agile iterations at a reduced cost. Take the pillars of data driven applications for IFM as identified by our workshop group; predictive/reactive alerting and tactical/strategic reporting, how might we go about servicing these needs? Consider how the path to smart buildings outlined below could help build an IFM product.

<img src="{{ root_url }}/images/PathToSmart.png" />

* Build the value proposition founded on a clear vision of what your users want.
* Identify the data that will drive your smart building product including open data
* Identify the sensors needed to gather your data, they could be mobile devices or occupancy sensors 
* Identify connectivity from the sensor to your data infrastructure, this might be radio to IP connected gateways or directly onto the local network via POE (power over ethernet)
* Structure your message payloads and commit to schemas to deliver repeatable processes for message parsing and routing within your building
* Configure your events turning your data into information using rules based platforms for IoT such as node red
* Build widgets and data services that can be bound together for dashboarding. By identifying common user needs across the enterprise we can operate a leaner system stack
* Build user portals and dashboards using your common data services and components
* Validate tenant user experience through surveys and modelling tenant behaviour using occupancy devices
* Iterate to improve using data gathered throughout the building to deliver better products and experiences

Opensensors has firmly backed Open Source and Open Data as the best way to yield value from the Internet of Things choosing to collaborate with the tech community to enable facilities managers to build higher order systems focused on their domain expertise.  Please contact commercialteam@opensensors.io should you have a need for a smart building workshop or are ready to build your next generation smart building product.

