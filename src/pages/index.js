import DemoPage from "./DemoPage";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage.md";
import ContactPage from "./ContactPage.md";
import UserPage from "../audio-source/server/pages/UserPage";
import SongPage from "../audio-source/server/pages/SongPage";

import "./themes/SNESologyPageTheme.css"

const themeName = 'theme-snesology';
const pageList = [

/** Object,         Path                                Title           Header      Footer **/
    [HomePage,      '/home',                            'Home',         true,       true],
    [AboutPage,     '/about',                           'About',        true,       false],
    [DemoPage,      '/demo',                            'Demo',         true,       false],
    // [DownloadsPage, '/downloads',                       'Downloads',    true,       false],
    [null,          "https://discord.gg/qdAqznv",       'Discord',      true,      false],
    [ContactPage,   '/contact',                         'Contact',      false,      true],

    [SongPage,      '/user/:username/song/:songPath',   'Song Page'],
    [UserPage,      '/user/:username',                  'User Page'],

]

export {
    themeName,
    pageList,
}
