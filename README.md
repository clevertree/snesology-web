# SNESology Website


## Project Introduction
The SNESology Project allows anyone with a web browser to compose and share original music based on the <em>Super Nintendo Entertainment System</em> Sound chip, and other consoles too! 
        
This DAW will focus on the original chiptune sound and allow users to create, edit, and publish their own songs, as well as view the 'source' of anyone else's published song. 


### Console Music

The only way to play

### Project Goals

*   Create music from any browser. No software to install.
*   Songs built on web technology. No sample libraries to manage
*   Edit songs in real-time with your friends (like google docs!)
*   Hire professional help to take your WIP to the next level
*   Chip support: C64, NES, SNES, Sega, PSx, and others
*   [Open Source](https://github.com/clevertree/snesology-web/) & Free forever



## Composer Features: <a name="features"></a>
* Works on any modern browser on any phone, tablet or pc.
* Instruments and effects can be wrapped in each other to build complex presets.
* Note tracks can be called recursively for a highly structured song.

### What's Currently Working
* Add, edit, and delete notes and note tracks.
* Edit note velocity and duration.
* Quarter tone compatibility (missing in MIDI)
* Recursively play back tracks by adding a 'Track Note'.
* Track note transposing (play back tracks at different frequencies)

### Under the Hood
* Audio Source brings the WebAudio API to mobile by using a WebView as a proxy.
* Songs, instruments, and samples written for Audio Source will work on any platform. 
* Instruments render using React VirtualDOM on the UI thread while rendering audio in the WebView proxy. 

### Planned Features
* Sample libraries
* Audio recording and editing
* Track XY Grid for easy mouse-click composition
* Real-time editing between multiple users (like Google Docs)
* Server-side song rendering
* Import/Export MIDI files


# Web Browser Demo (Alpha)
Click the image below to try Audio Source Composer (Alpha) on your browser.

[![Browser Portrait](https://files.audiosource.io/releases/browser/screenshots/browser-portrait1.png)](https://snesology.net/demo "Demo")




# SNESology Player (ASP) <a name="player"></a>
Coming Soon!



## How can I help? What should I help with? Are there instructions? 
### Most of the work will be done on our github repo. Check out the README for installation instructions. 
We want help with everything from images, css, UI, testing, programming, and feedback. (And PR obviously!)

Git Repo: https://github.com/clevertree/snesology-web





# Contact

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

### How to report a bug

*   Go to [Github.com](https://github.com/clevertree/audio-source-composer/) and grab an account
*   Check for [existing bugs](https://github.com/clevertree/audio-source-composer/issues/) with the same description
*   Create a new [bug report](https://github.com/clevertree/audio-source-composer/issues/new) describing the problem
*   List your operating-system and browser versions
*   If possible, include the [developer's console](https://kb.mailster.co/how-can-i-open-the-browsers-console/) in the screen-shot
*   Try to include a [screen-shot](https://northatlanticlcc.org/help/how-to-save-a-screenshot-of-a-webpage) of the issue
*   Optionally describe your issue in the #bugs channel on [Discord](https://discord.gg/6NDH7sU)

###### [Created by Ari Asulin](https://github.com/clevertree/)
