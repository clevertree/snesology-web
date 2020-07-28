import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './audio-source/serviceWorker';

import {IndexRouter} from "./audio-source/site";
import {LibraryIterator} from "./audio-source/song";

// Set default library
import DefaultLibraryData from "./snesology.library";
LibraryIterator.setDefaultLibrary(DefaultLibraryData);

ReactDOM.render(
  <React.StrictMode>
      <IndexRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
