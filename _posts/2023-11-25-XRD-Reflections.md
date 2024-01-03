---
title: XRD Reflections
author: [1,2,3]
date: 2023-11-25 10:00:00 +0200
categories: [XR]
tags: [reflections]     # TAG names should always be lowercase
---

## Adrian's Reflection

### What I did
I've worked with AR and VR technologies throughout the projects, expanding my expertise of those technologies and better understanding the Unity Engine.
Working developing the AR application, I discovered how important it is to connect something virtual to the real world and make it easy for the user to grasp.
I've additionally worked on the Temple scene, as well as in the city center with Marty and Marian, establishing a blacksmith area as authentically as feasible.
Another component I worked on in an AR project was the Text Canvas interaction, where I ran into a problem utilizing TextMeshPro, most likely due to the size of the Prefab, but using the old text managed to accomplish the same functionality, albeit with a much worse experience.

I was in responsible of putting up the game logic for the VR project, as well as connecting all of the "Core" to Marty's interaction plate and Marian's implementation of JSON and the Canvas element.

Aldo, throughout the testing process and finally to check how is made for the VR set, I was encountering some challenges with the Unity Build Settings, namely developing as an Android application within the VR rather than a VR game.

### What I enjoyed

I enjoyed seeing the projects in action, as well as seeing people attempt AR and VR games, finally learning something about Ancient Rome and general history. (This is an educational effort.)

### What I found difficult

I've found it tough to deal with AR projects in general, especially when a prefab needs to be downsized to fit better in the actual world.

And for the VR project, the main drawback was the lack of access to a VR set for development and testing.
In additional the permanent link with VR set wasn't working on my laptop.

### What really worked

In the end, both games worked and were presented, so I can conclude that both projects performed as expected, despite the fact that we spent more time designing and testing the AR project.

### In the future

Canvas should be a necessary for AR projects, as well as anything modular like constructing your own Prefab or scene and putting up extra elements for historical courses, specifically for the instructor to be able to prepare his content for the history class. (It is not essential to come from Ancient Rome.)

To make the VR project more participatory in the future, features like as 50-50, asking the public, and so on will be included.(similar to "Who Wants to Be a Millionaire?")
Another innovation will be the ability to change the Scene area based on the subject of the questions, rather than only the historical one.

## Marian's Reflection


## Martynas Reflection

### My contributions

### AR:
- Market building prefab modeling
- Interactive slides prototype
- Active tracking of multiple AR markers (2D images)
- Rotation and scaling of the model using touch controls
- The generation of voice narratives (audio files)
- Voice over function - audio playback in response to a touch event on a specific model (Raycasting)

### VR:
- Development of pressure plates and their activation mechanics
- Implementation of haptic feedback when interacting with props

### Disclaimer 
Within this reflection I will not delve into the specific implementation or the reasoning behind various choices, as I have already covered these topics in the blog posts.

### Reflection

I have found the XRD course to be a broad mix of challenges and accomplishments. As a result of this experience, I have been able to accumulate new technical skills as well as gain a greater understanding of extended reality (XR).

During the course two different projects were developed, demonstrating how augmented and virtual reality can be used in education. The development of these projects involved Unity, some XR libraries, and C#. Unity was the biggest challenge, since I did not have any prior experience with it. Learning Unity asynchronously while working on our projects proved to be a steep learning curve for me.

In terms of the virtual reality project, it was a bit tougher than I expected, and I felt that I was spending a lot of my time trying to complete something that was not extremely important. To give an example, I tried setting up the pressure plate mechanics with a configurable joint, that would behave somewhat like a spring joint, but not entirely. When heavy objects are placed on top of the pressure plate, the pressure plate would visually go down, and then I would track the Y distance for the activation logic – because it was a button for our questionnaire game. This idea was scratched and then I replaced it with different mechanics, because when I was virtually testing it in the game, I found out that the activation logic was acting up – for example one of the problems was that it sometimes was activating twice and I could not find the sweet spot for joint configuration and overall physics. 

A large part of our AR application involved modeling the environment, creating animations for our citizen models, or creating sound interactions when a user presses a particular citizen model. To make the experience more engaging and interesting, we developed some narratives that were designed to simulate what people could communicate with one another during that era. Which, I believe, contributed greatly to immersion.

Overall, despite the limited time we had available for both projects, I am happy with the outcomes. Of course, I believe that there are many things that could be improved and refined. However, the breadth of knowledge we gained during this course is substantial and lays a solid foundation for the future learning and growth. 

#### What worked great?

The lessons were structured and engaging, effectively covering theoretical aspects including the technical details of hardware, workings of XR devices, and their progress and challenges, as well as real world applications. 

Additionally, the VR and AR tutorials/exercises provided an excellent foundation for beginners (like me). They provided complete instructions on how to set up each environment, how to build for the device, and even provided resources and ideas for further exploration.

#### What are important factors to immersion?

In creating immersive environments, there is more to it than visual fidelity. The haptic feedback that is provided in our VR project and audio narrations of citizens in our AR project play a significant role in enhancing the user experience, making it more engaging, immersive.

#### How does our projects add value to the end user?

AR: By visualizing historical buildings and events in their real-world context, users can gain better understanding of Roman history, fostering a deeper connection with the subject matter.

VR: VR enhances the learning experience by infusing it with enjoyment and interactivity, which can increase user motivation to actively engage with and complete the questionnaire, thereby facilitating new learning or refreshing forgotten knowledge. 


