import * as React from "react";
import {ASUIPageContainer, ASUIMarkdown} from "../audio-source/src/components";

import ASComposer from "../audio-source/src/composer/ASComposer";

export default class DemoPage extends React.Component {
    render() {
        return (
            <ASUIPageContainer {...this.props}>
                <ASUIMarkdown source={`
                    # SNESology Composer Demo
                    Menu->View->Enable Fullscreen to render in landscape mode
                    [or load the Composer by itself](/composer)
                `}/>

                <ASComposer url="/user/protricity/song/Terra_MIDI.json"/>
                <ASUIMarkdown source={`
                Check back frequently for updates...
                `}/>
            </ASUIPageContainer>
        );
    }
}


