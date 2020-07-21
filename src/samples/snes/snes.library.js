// import FileService from "../../song/file/FileService";

const SNESLibraryIndex = {
	magnet: "magnet:?xt=urn:btih:a31531cc4c064024f2e00ad8d869d8aa2129c3c6&dn=snesology-samples&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.webtorrent.io",
	baseURL: "torrent://a31531cc4c064024f2e00ad8d869d8aa2129c3c6/",
	// libraryFile: "library.json",
	title: 'SNES Libraries',
	libraries: () => {
		return [
			new SNESLibrary(require('./ffvi/ffvi.library.json'))
		]
	}
}

export default SNESLibraryIndex;


class SNESLibrary {
	constructor(libraryData) {
		this.data = libraryData;
		console.log('SNESLibrary', libraryData);
	}

	get title() { return this.data.title; }

	presets(programClassFilter) {
		const presets = this.data.presets.map(presetData => {
			const presetConfig = Object.assign({}, presetData);
			if(presetData.tags)
				presetConfig.tags = presetData.tags;
			presetConfig.voices = presetData.voices.map(sampleData => ['AudioBufferInstrument', Object.assign({}, sampleData, {
				url: SNESLibraryIndex.baseURL + this.data.urlPrefix + sampleData.url,
			})])
			return ['PolyphonyInstrument', presetConfig];
		});

		console.log('presets', presets);
		switch(programClassFilter) {
			default:
				case 'PolyphonyInstrument':
			return presets

		case 'AudioBufferInstrument':
			const voices = [];
			presets.forEach(presetData => {
				presetData.voices.forEach(voicePreset => {
					voices.push(voicePreset);
				})
			});
			return voices;
		}
	}
}
