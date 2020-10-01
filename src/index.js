import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './audio-source/serviceWorker';
import {IndexRouter} from "./audio-source/server";
import {pageList, themeName} from "./pages/";
import RemotePresetLibrary from "./audio-source/song/library/RemotePresetLibrary";



// TODO: switch css theme and header image
ReactDOM.render(
  <React.StrictMode>
      <IndexRouter pageList={pageList} themeName={themeName} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();



// Set up libraries
const url = 'https://files.snesology.net/samples/';
RemotePresetLibrary.addRemoteLibrary(`${url}snes/contra.library.json`,    "[SNES] Contra III - The Alien Wars",         "snes-contra")
RemotePresetLibrary.addRemoteLibrary(`${url}snes/ffvi.library.json`,      "[SNES] Final Fantasy VI",                    "snes-ffvi")
RemotePresetLibrary.addRemoteLibrary(`${url}snes/soe.library.json`,       "[SNES] Secret of Evermore",                  "snes-soe")
RemotePresetLibrary.addRemoteLibrary(`${url}snes/scviv.library.json`,     "[SNES] Super Castlevania IV",                "snes-scviv")
RemotePresetLibrary.addRemoteLibrary(`${url}snes/smw.library.json`,       "[SNES] Super Mario World",                   "snes-smw")
RemotePresetLibrary.addRemoteLibrary(`${url}snes/taobar.library.json`,    "[SNES] The Adventures of Batman and Robin",  "snes-taobar")
RemotePresetLibrary.addRemoteLibrary(`${url}snes/terranigma.library.json`,"[SNES] Terranigma",                          "snes-terranigma")
RemotePresetLibrary.addRemoteLibrary(`${url}snes/zamn.library.json`,      "[SNES] Zombies Ate My Neighbors",            "snes-zamn")


RemotePresetLibrary.addRemoteLibrary(`${url}nes/contralogic.library.json`,"[NES] Percussion (ContraLogic)", "nes-contralogic")
// const magnetURL = "magnet:?xt=urn:btih:a31531cc4c064024f2e00ad8d869d8aa2129c3c6&dn=snesology-samples&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.webtorrent.io";
