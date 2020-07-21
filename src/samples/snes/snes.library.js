// import FileService from "../../song/file/FileService";

const SNESLibraryIndex = {
	magnet: "magnet:?xt=urn:btih:76cae1312f250071f644631b6cffd3fb1645e50b&dn=fws&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com",
	baseURL: "torrent://76cae1312f250071f644631b6cffd3fb1645e50b/",
	// libraryFile: "library.json",
	title: 'SNES Libraries',
	libraries: () => {
		return [
			new SNESLibrary(require('./sets/ffvi.library.json'))
		]
	}
}

export default SNESLibraryIndex;


class SNESLibrary {
	constructor(libraryData) {
		this.data = libraryData;
		console.log('SNESLibrary', this);
	}

	get title() { return this.data.title; }

	presets(programClassFilter) {

		// console.log('programClassFilter', programClassFilter);
		switch(programClassFilter) {
			default:
				case 'PolyphonyInstrument':
			return this.data.presets.map(presetData => {
				const presetConfig = {
					title: presetData.title,
					voices: []
				}
				if(presetData.tags)
					presetConfig.tags = presetData.tags;
				presetConfig.voices = presetData.voices.map(sampleData => ['AudioBufferInstrument', Object.assign({}, sampleData, {
					url: SNESLibraryIndex.baseURL + this.data.sampleFolder + sampleData.url,
				})])
				// if(LibraryData.baseURL)
				// 	presetData.url = LibraryData.baseURL + presetData.url;
				return ['PolyphonyInstrument', presetConfig];
			});

		case 'AudioBufferInstrument':
			const voices = [];
			this.data.presets.forEach(presetData => {
				presetData.voices.forEach(sampleData => {
					voices.push(['AudioBufferInstrument', Object.assign({}, sampleData, {
						url: SNESLibraryIndex.baseURL + this.data.sampleFolder + sampleData.url,
					})]);
				})
			});
			return voices;
		}
	}
}
