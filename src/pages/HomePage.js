import * as React from "react";
import {ASUIPageContainer, ASUIMarkdown} from "../audio-source/components";
import ASUIPagePlaylist from "../audio-source/components/page/playlist/ASUIPagePlaylist";


export default class HomePage extends React.Component {

// {this.state.playlist ? this.state.playlist.map(entry => : null}

    render() {
        return (
            <ASUIPageContainer {...this.props}>
                <ASUIMarkdown trim={false} source={introText}/>
                <ASUIPagePlaylist src="/playlists/feed/home.pls"/>
                <ASUIMarkdown trim={false} source={aboutText}/>
            </ASUIPageContainer>
        );
    }
}


const introText = `
# SNESology
The SNESology Project allows anyone with a web browser to compose and publish music using samples from the 
__Super Nintendo Entertainment System__ Sound chip, and other consoles too! 

### Project Goals

*   [Open-source](https://github.com/clevertree/snesology/) & free to use forever
*   Create music from any browser. No software to install.
*   Songs built with web technology. No sample libraries to manage.
*   Edit songs in real-time with your co-producers (like google docs).
*   Chip support: C64, NES, SNES, Sega, PSx, etc.
*   Framework for professional, collaborative, & administrative services.

Check out some published songs below:
`;

const aboutText = `
## Help Wanted!

### How to report a bug

*   Go to [Github.com](https://github.com/clevertree/audio-source-composer/) and grab an account
*   Check for [existing bugs](https://github.com/clevertree/audio-source-composer/issues/) with the same description
*   Create a new [bug report](https://github.com/clevertree/audio-source-composer/issues/new) describing the problem
*   List your operating-system and browser versions
*   If possible, include the [developer's console](https://kb.mailster.co/how-can-i-open-the-browsers-console/) in the screen-shot
*   Try to include a [screen-shot](https://northatlanticlcc.org/help/how-to-save-a-screenshot-of-a-webpage) of the issue
*   Optionally describe your issue in the #bugs channel on [Discord](https://discord.gg/6NDH7sU)

### Want to contribute?

If you have an idea for the project, skill to lend, or you think you can contribute in some other way: [](https://github.com/clevertree/snesology/)We're looking for programmers, graphic artists, musicians, beta testers, and feature wish-lists. Join our [Discord](https://discord.gg/6NDH7sU) and check out our [github README](https://github.com/clevertree/snesology/) for information on how to help.
`
