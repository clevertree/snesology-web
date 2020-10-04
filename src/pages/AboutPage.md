# About


The SNESology and AudioSource Project is free for everyone. It is also open source, so anyone can join in the development.

SNESology was originally created by Shnabubula (as a music album) to celebrate the music that came from the SNES.
From there, it evolved into a blog to post SNESology & SNES related music and albums, maintained by Monobrow and others.

At that time, SNESology released sample sets in various formats, to emulate the SNES sound on modern platforms. SNESology musicians used these sets (and others) to make songs that were posted on the blog. Protricity was also approached at this time to make a sample library / VSTi for SNES samples, that would be released by SNESology in the future.

Currently, The SNESology Project has been restarted as a free, open-source Digital Audio Workstation (DAW) called [i]Audio Source Composer[/i], that runs on any modern browser.
This DAW will focus on the original chiptune sound (and more) and will allow users to create, edit, and publish their own songs.

## Links:
* Github: https://github.com/clevertree/snesology-web
* Discord: https://discord.gg/qdAqznv
* Facebook Group: https://www.facebook.com/groups/SNESology
* Facebook Page: https://www.facebook.com/pg/SNESology

## Specs:
* Open-source & free to use forever
* Create music from any browser. No software to install.
* Songs built with web technology. No sample libraries to manage.
* Edit songs in real-time with your co-producers (like google docs).
* Chip support: C64, NES, SNES, Sega, PSx, etc.
* Framework for professional, collaborative, & administrative services.

## FAQ

### Q: Why doesn't this composer have a standard (left-to-right) MIDI note editor?
A primary goal of Audio Source Composer is to provide a song 'source' view which is easy to read and edit. This is why ASC's primary track view is top-down "tracker" style. Another limitation is the ability to render both an HTML-based track view and a native mobile one as well. Once this is solved, it will be possible to design an all-platform left-to-right or top-to-bottom standard MIDI note editor




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

### Browse to Local Development Server
[http://localhost:3000](http://localhost:3000)

Note: For the API calls to work, also run the production server below.


### Run the API Server (NodeJS)
The API server handles API calls to the backend. 
It also distributes the optimized production server HTML.
~~~~
$ npm run start-server
~~~~

### Browse to Local Production Server
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
