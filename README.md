# SNESology Project Introduction
The __SNESology Project__ allows anyone with a web browser to compose and share original music based on the __Super Nintendo Entertainment System__ Sound chip, and other consoles too! 
This DAW (Digital Audio Workstation) will focus on the original chiptune sound and allow users to create, edit, and publish their own songs, as well as view the 'source' of anyone else's published song. 


## Web Browser Demo (Alpha)
Click the image below to launch SNESology Composer on your browser.

[![Browser Portrait](https://files.audiosource.io/releases/browser/screenshots/browser-portrait1.png)](https://snesology.net/demo "Demo")


## Project Goals

* Restore and remix classical chip-tune music
* Create and publish music with chip-tune instruments on any device
* Streaming Samples: No sample libraries to manage
* [Open Source](https://github.com/clevertree/snesology-web/) & Free forever


## AudioSource Composer Features
* Works on any modern browser on any phone, tablet or pc
* Instruments and effects can be wrapped in each other to build complex presets
* Note tracks can be called recursively for a highly structured song

## What's Currently Working
* Add, edit, and delete notes and note tracks
* Edit note velocity and duration
* Quarter tone compatibility
* Recursively play back tracks by adding a 'Track Note'
* Track note transposing (play back tracks at different frequencies)
* 432hz compatibility 

## Under the Hood
* Built on WebAudio technology. 
* Songs, instruments, and samples written for Audio Source will work on any device 
* Audio Source Mobile brings the WebAudio API to mobile devices by using a WebView as a proxy
  * Instruments render using React VirtualDOM on the UI thread while rendering audio in the WebView proxy

## Planned Features
* Chip support: C64, NES, SNES, Sega, PSx, and others
* Audio recording and editing
* Track XY Grid for easy mouse-click composition
* Real-time editing between multiple users (like Google Docs)
* Server-side song rendering
* Import/Export MIDI files
* Edit songs in real-time with your friends (like google docs)
* Hire professional services to take a WIP to the next level






## How can I help? What should I help with? Are there instructions? 
Most of the work will be done on our github repo. Check out the README for installation instructions. 
We want help with everything from images, css, UI, testing, programming, and feedback. (And PR obviously!)

Git Repositories: 
* [SNESology Website Repository](https://github.com/clevertree/snesology-web)
* [Audio Source Composer Repository](https://github.com/clevertree/audio-source-composer)

To get set up for local development, please follow the instructions below:


## Website Development <a id="dev-web"></a>

The SNESology Application is developed in Javascript using ReactJS and ReactNative to work on all platforms. 
Please follow the instructions below to set up your local development environment for this project. 

### Prerequisites

1. Download and install [NodeJS](https://nodejs.org/en/download/)
    * If developing on Windows, please use [Chocolatey](https://chocolatey.org/install) 
 for a linux-like development console and package manager
2. Download and install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) source control
3. Register an account with [github.com](GitHub) and set up your [SSH key](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) on your ssh client

~~~~
$ git clone ssh://git@github.com/clevertree/snesology-web --recursive
$ cd [snesology-web]
$ npm install
~~~~

### Run Development Server (ReactJS)
This is the server used to develop the application front-end. 
This command should also open the website in your local browser.
It is not necessary to run the development server on a production deployment.
~~~~
$ npm start
~~~~

### Browse to Local "Development" Server
[http://localhost:3000](http://localhost:3000)

Note: For the API calls to work, also run the production server below.


### Run the API Server (NodeJS)
The API server handles API calls to the backend. 
It also distributes the optimized production server HTML.
~~~~
$ npm run start-server
~~~~

### Browse to Local "Production" Server
[http://localhost:8080](http://localhost:8080)

Note: you can change the port and other config options at this location:

~~~~
src/config.json
~~~~



## Contact

Open-Source means the SNESology project is free forever, and anyone can join in the development,
so we're always looking for testers, artists, and all kinds of musician to 
[contribute](https://github.com/clevertree/snesology-web/issues/4).

Currently the composer is in
[active development](https://github.com/clevertree/snesology-web)
and has not yet been released.
Check back often for updates as we get closer to Beta!{
If you want to join up, please contact us on the 
[GitHub page](https://github.com/clevertree).

Check back often for updates as we get closer to Beta!

### Join our Discord channel

Talk about SNESology and other stuff. 
[Discord](https://discord.gg/qdAqznv).

### Contribute / Report a bug

*   Go to [Github.com](https://github.com/clevertree/audio-source-composer/) and grab an account.
*   Check for [existing bugs](https://github.com/clevertree/audio-source-composer/issues/) with the same description.
*   Create a new [bug report](https://github.com/clevertree/audio-source-composer/issues/new) describing the problem.
*   List your operating-system and browser versions.
*   If possible, include the [developer's console](https://kb.mailster.co/how-can-i-open-the-browsers-console/) in the screen-shot.
*   Try to include a [screen-shot](https://northatlanticlcc.org/help/how-to-save-a-screenshot-of-a-webpage) of the issue.
*   Optionally describe your issue in the #bugs channel on [Discord](https://discord.gg/qdAqznv).

#### [Created by Ari Asulin](https://github.com/clevertree/)
