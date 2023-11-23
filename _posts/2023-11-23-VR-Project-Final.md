---
title: VR Project Final
author: [1,2,3]
date: 2023-11-23 18:00:00 +0200
categories: [VR, DEV]
tags: [article, idea, innovation, education, history]     # TAG names should always be lowercase
---

Approaching the final and preparing for the presentation, we tried to test in the lab using the VR set and actually encountered some issues during the build process, more specifically, inside the VR view we will get a window as a mobile applicaiton instead of the VR app, this issue has been fixed using the correct building settings.(With assistance from [XR-Interaction-Toolkit-Examples as resources](https://github.com/Unity-Technologies/XR-Interaction-Toolkit-Examples))

Marty's implementation of HapticFeedback was another feature.

This functionality will benefit the end-user when they grab an object and help for a better experience in addition to the visual element.

![Marty HapticFeedBack](/assets/img/Marty-HapticFeedBack.png)

Another innovation was adding more items to the player scenario, allowing the user to interact with a greater range of things.

![VR Scene Improve](/assets/img/vr-scene-improve.png)

We also discovered a bug that exists when using the pressure plate and affects the end-user experience. To address this issue, we reduced the collision zone and increased the mass of the object, allowing the user to place only one object rather than multiple items with a larger mass in order to activate the pressure plate.

![Marty Bug Fix](/assets/img/mart-bug-fix.png)

The last bug we discovered was in the JSON file read method.More specifically, the file path was not suitable for usage when the program was build and was only functional when debugging inside the Editor.

To resolve this issue, we utilized "Applicaiton.streamingAssetsPath" and a Unity MACRO to detect whether the application is running from the Editor (testing) and when it is truly running within the VR headset.(build)

![Json Path Bug](/assets/img/json-bug.png)


Overall, the project brought the face of exibition along with the AR applicaiton, and we love that people appreciated our applicaiton so much, and maybe they learned a little bit about history while using it.


***Always walk through life as if you have something new to learn and you will. ~ Vernon Howard***