import Server from "../src/audio-source/server/Server";

const path = require('path');
const serverConfig = require('../src/audio-source/server/.server.json');
serverConfig.publicDirectory = path.resolve(__dirname, '../private/public');
serverConfig.privateDirectory = path.resolve(__dirname, '../private');
console.log('serverConfig', serverConfig)
const server = new Server();
server.start();
