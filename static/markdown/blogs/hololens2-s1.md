For about a year, I have been developing apps for the HoloLens 2 in both `unity` and the standalone `UWP` enviroment. I began work with the HoloLen 2 during my summer 2021 co-op and have continued throughout following fall and spring semesters. In my time, I have experienced the pros and cons of being an *early adopter*. Some aspects of development work well and others, not so much. In this blog I talk about my experiences, what I learned, and HoloLens 2 related important information.

### About the HoloLens 2
To provide a little context about the device, the HoloLens 2 was released in the late months of 2019 and so had been live for just over 2 years by the time I started working with it. Unlike it's predecessor the HoloLens 1, the HoloLens 2 is built with the `Arm64` architecture. Also, it uses a minified version of windows 10 as it's operating system.

> Read more about the HoloLens 2 [here](https://docs.microsoft.com/en-us/hololens/hololens-release-notes).

### Getting Started
Generally, getting started with the standalone UWP app for the HoloLens 2 is **much** simplier than Unity. Unity has a learning curve and will set you back with knowing how to navigate their user-interface and also propertly setting up the environment with the `Mixed Reality Toolkit` *(MRTK)*. Lastly, if you are developing the app as a standalone UWP app, you will want to know how to use XAML and UWP specific apis. If you are developing the app using Unity and MRTK, just focus on using Unity correctly and researching the MRTK as that is basically your framework.

- UWP - To get started with UWP for the HoloLens 2 you need the `Univeral Windows Workload` installed for Visual Studios *(preferably 2019|2022 - I use 2022 Preview)*.

- Unity - To get started, I recommend using [`Unity Hub`](https://unity3d.com/get-unity/download) as it allows you to organize your projects and Unity editor installations. Once that is installed you want to use the [MRTK](https://github.com/microsoft/MixedRealityToolkit-Unity) repo to guide you because there is some work to be done here.

### User-Interface Creation

- Standalone UWP - Creating user-interfaces in a UWP app for the HoloLens 2 is essentially the same as for desktop. No special packages to install or anything which is great! However it is a general rule of thumb to make things larger than one would think. 

- Unity - Creating user-interfaces in Unity was time consuming and rather difficult because of the 3d space. To make user interfaces I used the `Mixed Reality Toolkit` *(MRTK)*; checkout their github [here](https://github.com/microsoft/MixedRealityToolkit-Unity). One of the challenging aspects when getting started making a 3d gui is the ui's distance from the user.

### Compilation/Linking
- Standalone UWP - In my experience, compiling and linking in *UWP* is pretty much plug and play. You don't need to do any extra work to get things *up and running*. As you would expect nuget packages also get included in your build and such.

- Unity - In unity for apps that don't require managed plugins, you can expect things to *just work*. I must mention that compilation & linking from your C# scripts to the native app can take awhile *(5 to 9 minutes depending on your level of compilation optimization)*. If you're used to quick compilations and things like hot reload, this is going to be a rough ride.

  > There are steps you can take to reduce compilation times like disabling `optimize mesh data`. Even then, Unity compiles your C# to an intermediate language called `IL2CPP` *(Intermediate Language to C++.. what a clever name)* and then that is compiled via the native compiler to your app. This double compilation/linking and not to mention compiling C++ which is notorious for long build times.. well, get yourself some ☕.

  Now, lets remove the suspension from your ride, because you want to use some managed plugins. Managed plugins that do not have dependencies won't raise a threat, unless you're using reflection. In most cases though, you'll be importing/using plugin that does have dependencies. This is where a serious problem in my opinion exist related to the developer experience. **When you import a managed plugin with dependencies you need to import the dependencies manually & recursively for all the dependencies not already supported by Unity.** In other words, you need to add every dependency of your plugin and the dependencies of each dependency until Unity supports the rest. 

  > In my experience, I had a plugin that was dependent on a nuget package and some system libraries like `System.Text.Json`. Therefore, like I stated above, I had to manually get the `.dll`s and add them to my unity project.

  At this point you're cruising down a rocky road in a car without suspension; its time to remove your seat. Code stripping is an important part of reducing the size of your app bundle, but when combining managed plugins & Unity's rules regarding reflection; it can be hazardous. I found that using a [`link.xml`](https://github.com/jilleJr/Newtonsoft.Json-for-Unity/wiki/Reference-link.xml) file in my plugins folder helped resolve *some* of my issues with linking. That file allows you omit properties, methods, and entire libraries from code stripping.

  > The MRTK actually uses `link.xml` in their unity package to prevent code stripping of their packages.

### Deployment
Deploying my binaries to the HoloLens 2 from a standalone UWP app was a simpler than Unity for obvious reasons mentioned earlier.

- Deployment of standalone UWP apps through Visual Studios is straight forward. Using `Remote Machine` deployment allows you deploy to the device wirelessly and supports live debugging. You can also choose the `Publish` which basically creates a bundle option and that can be quickly deployed to you device using an ad-hoc approach.

- Deployment in Unity can vary depending on what you're trying to achieve. If you are trying to debug your application you need to follow this checklist [here](https://docs.microsoft.com/en-us/windows/mixed-reality/develop/unity/managed-debugging-with-unity-il2cpp). Even following the docs I had issues getting my breakpoints to be hit. For packaging your app you want to `build` not `build and run` which will generate a Visual Studio project that contains IL2CPP which you can bundle.


> One of the confusing things about building your C# to IL2CPP is you want to target `release` mode for debugging...

From getting started to deployment, I found vast differences in the developer experience from standalone UWP to Unity. UWP standalone is much simpler, reliable, and overall is a much better option for testing before you migrate to Unity. The main problem with standalone UWP is obvious, you have no access to the 3d space. You