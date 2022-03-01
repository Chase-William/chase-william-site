## My HoloLens 2 Development Experience

##### Introduction with Foreshadowing
For about a year, I have been developing apps for the HoloLens 2 in both `unity` and standalone `UWP`. I began work with the HoloLen 2 during my summer 2021 co-op and have continued throughout following fall and spring semesters. In this time, I have experienced the pros and cons of being an *early adopter* and let me tell you; this experiences has me weary of statements like *"should be an easy fix"* or *"sure I can implement that"*...


##### About the Tech *(objective)*
The HoloLens 2 was released in the late months of 2019 and so had been live for just over 2 years by the time I started working with it. Unlike it's predecessor the HoloLens 1, the HoloLens 2 is built with the `Arm64` architecture. Further, the HoloLens 2 uses a minified version of windows 10 operating system. 

> Want to read more about the specs? Checkout the release notes [here](https://docs.microsoft.com/en-us/hololens/hololens-release-notes).

##### Getting Started *(subjective)*
Getting started with the HoloLens 2 required me to *get comfy* with the `Universal Windows Runtime` *(UWP)*. I already had experienced with UWP from my `Xamarin.Forms` days so that was of assistance. So once I had my UWP toolkit for Visual Studio 2019|2022 I could get started. 

##### User-Interface Creation

- Standalone UWP - Creating user-interfaces in a UWP app for the HoloLens 2 is essentially the same as for desktop. No special packages to install or anything which is great! However it is a general rule of thumb to make things larger than one would think. 

- Unity - Creating user-interfaces in Unity was time consuming and rather difficult because of the 3d space. To make user interfaces I used the `Mixed Reality Toolkit` *(MRTK)*; checkout their github [here](https://github.com/microsoft/MixedRealityToolkit-Unity). One of the challenging aspects when getting started making a 3d gui is the ui's distance from the user.

##### Compilation/Linking
- Standalone UWP - From my findings, compiling and linking in *UWP* is pretty much plug and play. You don't need to do any extra work to get things *up and running*. As you would expect nuget packages also get included properly too.

- Unity - In unity for apps that don't require managed plugins, you can expect things to *just work*. I must mention that compilation & linking from your C# scripts to the native app takes a long ass time. If you're used to quick compilations and things like hot reload, this is going to be a rough ride.

  Now, lets remove the suspension from your ride, because you want to use some managed plugins. Managed plugins that do not have external dependencies do not raise a threat, unless you're using reflection. In most cases though, you'll be importing/using library that does have external dependencies. This is where a serious problem in my opinion exist related to the developer experience. **When you import a managed plugin with dependencies you need to import the dependencies manually & recursively for all the dependencies not already supported by Unity.** In other words, you need to add every dependency of your plugin and the dependencies of each dependency until Unity supports the rest. 

  > In my experience, I had a plugin that was dependent on a nuget package and some system libraries like *System.Text.Json*. Therefore, like I stated above, I had to manually get the `.dll`s and add them to my unity project.

  At this point you're cruising down a rocky road in a car without suspension; its time to remove your seat. Code stripping is an important part of reducing the size of your app bundle, but when combining managed plugins & Unity's rules regarding reflection; it can be dangerous. I found that using a `link.xml` file in my plugins folder helped resolve *some* of my issues with linking. That file allows you omit properties, methods, and entire libraries from code stripping.

  > The MRTK actually uses `link.xml` in their unity package to prevent code stripping of their packages.

#### Managed Plugins Rules for the HoloLens 2
A manage plugin is just a `.dll` that adheres to the following.
  - Runtime Compliancy
    - .NET Standard 2.0 *(what I use)*
      - Recommended by Unity because of it's smaller footprint and Microsoft concurs
    - .NET 4.x
      - This runtime never gave me extra leverage nor resolved any issues I had, therefore I do not use it.

##### Deployment


##### Running