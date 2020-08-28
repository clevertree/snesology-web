import ASDefaultLibrary from "./audio-source/default.library";
import SNESLibraryIndex from "./samples/snes/snes.library"

export default {
  title: 'SNESology Index',
  libraries: function* () {
    yield ASDefaultLibrary;
    yield SNESLibraryIndex;
  },
}
