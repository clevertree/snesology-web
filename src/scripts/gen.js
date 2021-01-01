const { resolve } = require('path');
const fs = require('fs');
const path = require('path');
const { readdir } = fs.promises;
const RSS = require('rss');

const PATH_FILES = path.resolve(__dirname, '../../public/files');
const PATH_SRC = path.resolve(__dirname, '../../src');
const PATH_INDEX_FILE = PATH_FILES + '/index.json';
const PATH_INDEX_RSS = PATH_FILES + '/rss.xml';
const PATH_TOUCH_FILE = PATH_SRC + '/touch.js';
const PATH_IGNORE = ['.', '..', '.git', '.idea', 'bower_components', 'node_modules', 'www', 'platforms'];
const FILE_MATCH = ['.jpg', '.jpeg', '.png', '.gif', '.md', '.m4v', '.mp4', '.pdf', 'stats.json'];
let indexJSON = [];

async function start() {
    console.log("Starting file generation");
    try {
        indexJSON = JSON.parse(fs.readFileSync(PATH_INDEX_FILE, 'utf8'));

    } catch (e) {
        console.error(e);
    }

    indexJSON = [];
    await processAll();

    fs.writeFileSync(PATH_INDEX_FILE, JSON.stringify(indexJSON, null, "\t"), 'utf8');
    fs.writeFileSync(PATH_TOUCH_FILE, `
    const Touch = ${new Date().getTime()};
    export default Touch;`);

    processRSS(indexJSON)
}

let watchTimeout = null;
async function watch() {

    for await (const fileDirectory of getDirectories(PATH_FILES)) {
        console.log("Watching ", fileDirectory);

        // eslint-disable-next-line no-loop-func
        fs.watch(fileDirectory, function (event, filename) {
            // console.log(event, fileDirectory, filename);
            clearTimeout(watchTimeout);
            watchTimeout = setTimeout(start, 500);
        });
    }
}

async function processAll() {
    for await (const filePath of getFiles(PATH_FILES)) {
        const fileName = filePath.split('/').pop().toLowerCase();
        let matched = false;
        for(const match of FILE_MATCH) {
            if(fileName.endsWith(match))
                matched = true;
        }
        if(!matched)
            continue;
        let relativeFilePath = filePath.replace(PATH_FILES + '/', '');
        // relativeFilePath = relativeFilePath.substr(2);
        indexJSON.push(relativeFilePath);
        // console.log(relativeFilePath);
    }

}

start()
    .then(watch)



function processRSS(filePathList) {
    let author = 'Ari Asulin';

    const categories = [];
    /* lets create an rss feed */
    var feed = new RSS({
        title: 'Paradigm Threat Images RSS Feed',
        description: 'A repository for conspiracy theory investigation and resources. This site is a work in progress. Feel free to contact me if you want to help write articles or collect resources.',
        feed_url: 'https://files.paradigmthreat.net/rss.xml',
        site_url: 'https://paradigmthreat.net/',
        image_url: 'https://paradigmthreat.net/logo512.png',
        managingEditor: author,
        webMaster: author,
        copyright: '2020 CleverTree',
        language: 'en',
        categories,
        pubDate: new Date().toGMTString(),
        ttl: '60',
    });

    for(const filePath of filePathList) {
        const absoluteFilePath = path.resolve(PATH_FILES, filePath);
        const stats = fs.statSync(absoluteFilePath)
        const date = stats.mtime.toGMTString();

        const fileName = filePath.split('/').pop();
        const fileExt = fileName.split('.').pop().toLowerCase();
        switch(fileExt) {
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
            case 'm4v':
            case 'mp4':
            case 'pdf':
                break;
            default:
                continue;
        }

        let category = filePath.split('/').shift();
        category = ucwords(category.replace(/_+/g, ' '));
        if(categories.indexOf(category) === -1)
            categories.push(category)

        /* loop over data and add to feed */
        feed.item({
            title: fileName,
            url: `https://files.paradigmthreat.net/${filePath}`, // link to the item
            categories: [category], // optional - array of item categories
            author: author, // optional - defaults to feed author property
            date, // any format that js Date can parse.
        });
    }

    fs.writeFileSync(PATH_INDEX_RSS, feed.xml(), 'utf8');


}


async function* getFiles(dir) {
    const dirents = await readdir(dir, { withFileTypes: true });
    for (const dirent of dirents) {
        const res = resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            if(PATH_IGNORE.indexOf(dirent.name) === -1) {
                yield* getFiles(res);
            }
        } else {
            yield res;
        }
    }
}
async function* getDirectories(dir) {
    const dirents = await readdir(dir, { withFileTypes: true });
    for (const dirent of dirents) {
        const res = resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            if(PATH_IGNORE.indexOf(dirent.name) === -1) {
                yield res;
                yield* getDirectories(res);
            }
        }
    }
}
// if(flc.endsWith('.jpg')
//     || flc.endsWith('.jpeg')
//     || flc.endsWith('.png')
//     || flc.endsWith('.bpm')) {
//     await processImage(category, filename);
// } else if(flc.endsWith('.mp4')
//     || flc.endsWith('.m4v')) {
//     await processVideo(category, filename);
// } else if(flc.endsWith('.pdf')) {
//     await processPDF(category, filename);
// } else if(flc.endsWith('.js')
//     || flc.endsWith('.html')
//     || flc.endsWith('.css')
//     || flc.endsWith('.json')
//     || flc.endsWith('.ico')
//     || flc.endsWith('.webp')
//     || flc.endsWith('.gitignore')) {
// } else {
//     await processFile(category, filename);
// }


function ucwords(str) {
    str = str.toLowerCase();
    return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
        function(s){
            return s.toUpperCase();
        });
}
