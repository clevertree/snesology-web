
const SNESLibraryIndex = {
	magnet: "magnet:?xt=urn:btih:a31531cc4c064024f2e00ad8d869d8aa2129c3c6&dn=snesology-samples&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.webtorrent.io",
	baseURL: "torrent://a31531cc4c064024f2e00ad8d869d8aa2129c3c6/",
	// libraryFile: "library.json",
	title: 'SNES Libraries',

	libraries: function* () {
		yield new SNESLibrary(require('./ffvi/ffvi.library.json'));
	},
}

export default SNESLibraryIndex;


class SNESLibrary {
	constructor(libraryData) {
		this.data = libraryData;
		// console.log('SNESLibrary', libraryData);
	}

	get title() { return this.data.title; }

	*presets() {
		const presets = this.data.presets;
		for(let i=0; i<presets.length; i++) {
			const presetData = presets[i];
			let presetAHDSR = this.data.defaultAHDSR;
			const presetConfig = Object.assign({}, presetData);
			if (presetConfig.ahdsr)
				presetAHDSR = presetConfig.ahdsr;
			delete presetConfig.ahdsr;

			presetConfig.voices = presetData.voices.map(sampleData => {
				const voiceConfig = Object.assign({}, sampleData, {
					url: SNESLibraryIndex.baseURL + this.data.urlPrefix + sampleData.url,
				});

				if (Array.isArray(voiceConfig.loop)) {
					voiceConfig.loopStart = voiceConfig.loop[0];
					voiceConfig.loopEnd = voiceConfig.loop[1];
					voiceConfig.loop = true;
				}
				if (voiceConfig.alias) {
					voiceConfig.rangeStart = voiceConfig.alias;
					voiceConfig.rangeEnd = voiceConfig.alias;
					delete voiceConfig.alias;
				}

				let voiceAHDSR = presetAHDSR;
				if (voiceConfig.ahdsr) {
					voiceAHDSR = voiceConfig.ahdsr;
					delete voiceConfig.ahdsr;
				}
				const [attack, hold, decay, sustain, release] = voiceAHDSR;
				const envConfig = {
					attack, hold, decay, sustain, release
				};
				Object.keys(envConfig).forEach(key => {
					if (!envConfig[key])
						delete envConfig[key];
				})
				voiceConfig.envelope = ['Envelope', envConfig];

				return ['AudioBuffer', voiceConfig];
			})
			if(presetConfig.voices.length === 1) {
				const voice = presetConfig.voices[0];
				voice[1].title = presetConfig.title;
				yield voice;
			} else {
				yield ['Polyphony', presetConfig];
			}
		}
	}

	*samples() {
		const presets = this.data.presets;
		for(let i=0; i<presets.length; i++) {
			const presetData = presets[i];
			for(let voiceData of presetData.voices) {
				yield SNESLibraryIndex.baseURL + this.data.urlPrefix + voiceData.url;
			}
		}
	}
}
