import * as React from "react";
import {ASUIPageContainer, ASUIMarkdown} from "../audio-source/components";
import ASUIPagePlaylist from "../audio-source/components/page/playlist/ASUIPagePlaylist";


export default class HomePage extends React.Component {

// {this.state.playlist ? this.state.playlist.map(entry => : null}

    render() {
        return (
            <ASUIPageContainer {...this.props}>
                <ASUIPagePlaylist src="/pls/feed/home.pls"/>
                <ASUIMarkdown source={`
                    # SNESology Website

                    
                    ## Project Introduction
                    The SNESology Project allows anyone with a web browser to compose and share original music based on the __Super Nintendo Entertainment System__ Sound chip, and other consoles too! 
                            
                    This DAW will focus on the original chiptune sound and allow users to create, edit, and publish their own songs, as well as view the 'source' of anyone else's published song. 
                `}/>
            </ASUIPageContainer>
        );
    }


}


