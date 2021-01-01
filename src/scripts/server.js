import path from "path";
import Server from "../audio-source/src/server/Server";
import serverConfig from '../config.json';


if(!serverConfig.publicDirectory)
    serverConfig.publicDirectory = path.resolve(__dirname, '../../private/public');
if(!serverConfig.privateDirectory)
    serverConfig.privateDirectory = path.resolve(__dirname, '../../private');
if(!serverConfig.buildDirectory)
    serverConfig.buildDirectory = path.resolve(__dirname, '../../build');

const server = new Server(serverConfig);
server.start();