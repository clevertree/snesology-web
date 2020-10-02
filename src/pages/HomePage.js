import * as React from "react";
import {ASUIPageContainer, ASUIMarkdown} from "../audio-source/components";
import ASUIPagePlaylist from "../audio-source/components/page/playlist/ASUIPagePlaylist";


export default class HomePage extends React.Component {

// {this.state.playlist ? this.state.playlist.map(entry => : null}

    render() {
        return (
            <ASUIPageContainer {...this.props}>
                <ASUIMarkdown trim={false} source={introText} updateLinkTargets/>
                <ASUIPagePlaylist src="/playlists/feed/home.pl.json"/>
                <ASUIMarkdown trim={false} source={aboutText} updateLinkTargets/>
            </ASUIPageContainer>
        );
    }
}


const introText = `

Catch our presentation for 
[MAGWest 2020](https://www.magwest.org/news/2020/9/25/schedule-is-live)
streaming live __today__ Oct 2nd 9:30 PDT
at [twitch.tv](https://www.twitch.tv/MAGFest).

or click the video link below:

[![Audi R8](https://img.youtube.com/vi/8BGDdypgcwI/0.jpg)](https://www.youtube.com/watch?v=8BGDdypgcwI "Audi R8")


# SNESology Project Introduction
The __SNESology Project__ allows anyone with a web browser to compose and share original music based on the __Super Nintendo Entertainment System__ Sound chip, and other consoles too! 
This DAW (Digital Audio Workstation) will focus on the original chiptune sound and allow users to create, edit, and publish their own songs, as well as view the 'source' of anyone else's published song. 



## Featured Songs (Coming Soon)
`;

const aboutText = `

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

Check back often for updates as we get closer to Beta!
`
