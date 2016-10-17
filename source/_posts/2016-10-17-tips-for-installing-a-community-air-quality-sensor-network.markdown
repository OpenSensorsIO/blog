---
layout: post
title: "Tips for installing a community air quality sensor network"
date: 2016-10-17 19:15
comments: false
categories: air quality network
---

Small air pollution sensor technologies have enabled deployment of numerous sensors across a small geographic area that can supplement existing monitoring networks and significantly reduce the cost of longer-term community air pollution studies.This helps mitigate the risk of current approaches to monitoring air quality in a region that rely on only a dozen or so stations and may give you an average that is not be representative of what’s happening where you live.

## What are you trying to do
Air quality is affected by many possible contaminants, in fact the Environmental Protection Agency (EPA) has identified six “criteria pollutants” as pollutants of concern because of their impacts on health and the environment . The criteria pollutants (http://www.epa.gov/airquality/urbanair/)  are:

1. ozone (O3) http://www.epa.gov/air/ozonepollution/
2. particulate matter (PM) http://www.epa.gov/air/particlepollution/ 
3. carbon monoxide (CO)  http://www.epa.gov/airquality/carbonmonoxide/ 
4. nitrogen dioxide (NO2) http://www.epa.gov/air/nitrogenoxides/
4. sulfur dioxide (SO2) http://www.epa.gov/air/sulfurdioxide/
5. lead (Pb). http://www.epa.gov/air/lead/ 

Under the Clean Air Act, the EPA has established primary and secondary National Ambient Air Quality Standards (NAAQS) for these six pollutants. As you begin, keep in mind what you want to measure and how that information will be used. Is there some final output or final report you've got to get to?


## Understand your sensor choices for collecting air quality data

Commercially available sensors can measure the level of potential contaminants including  O3, NO2, NO, SO2, CO, PM2.5 and lead.  These devices should be designed to be easy to connect and provide quality data measurements so that non technical community groups can deploy them.
 
Here are some factors to consider in assessing options for sensors to collect air quality data
* cost
* operating lifetime
* accuracy, precision,and bias of measurement
* range of sensitivity
* speed of response time
* maintenance requirements
* reliability

More information on what and how to measure see https://cfpub.epa.gov/si/si_public_file_download.cfm?p_download_id=519616
 
Beyond the sensors, you will need to make tradeoffs between cost and redundancy for the best network connectivity.
 
Point to point - lowest cost, greater number of coverage points, least redundancy for each individual point
Mesh - higher cost, greater redundancy
 
Most community-based sensor networks are adopting point-to-point network connectivity because of the ease of connection and low-cost structure. Here is a guide that we already have around pros and cons around connectivity, use that to find the best connectivity network 

## Our Process

OpenSensors recommends a phased approach, from proof of concept to full-scale deployment, to ensure a successful installation of an IoT network in a business environment. Our aim is to reduce the time to go live and minimize risk.
 
### Phase 1 Evaluate sensors:
Evaluate different sensors for quality, signal-to-noise ratio, power consumption and ease of setup by trying them out on a very small scale in a lab.  

### Phase 2 Proof of concept:
Do a full end-to-end test to verify that the queries and analytics were feasible. Connect 5 to 10 sensors to a cloud infrastructure.
 
### Phase 3 Pilot phase:
Move out of the lab into your actual environment. Typically, this requires somewhere between 30 to 100 sensors. We suggest a one to two-month test to ensure that the sensors work at scale and the gateway can handle the load, similar to production usage.

In addition to testing the sensors in the wild, this is the time to think through your onboarding process for the devices.  Questions like; who will install the sensors feeds into design decisions on the firmware of how much pre-configuration has to be done.  We recommend a ‘just works’ approach and an assumption that all sensors will be installed by people who willnot configure firmware.  If you need to deploy 200-300 sensors, the installation engineers need to be able to deploy a lot of sensors in a distributed physical environment over a short amount of time.  It is much more efficient for your sensors to be pre configured.  In these situations, we give usually give people a simple interface to enable them to add meta data such as location and elevation.  Sensors should be labelled clearly and details pre-loaded on a cloud platform like OpenSensors before they are deployed so that adding meta data information is a matter of 1-2 steps. 

### Phase 4 Plan and implement full-scale deployment:
After the pilot phase, there should be enough data to verify network performance and your choices for sensors and connectivity, after which, full deployment can be planned in detail and implemented.
 
Contact us if you would like assistance on sensor selection, network design, or planning a proof of concept deployment.
 
