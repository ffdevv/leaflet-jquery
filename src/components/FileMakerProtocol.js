import { nz } from "./auxiliary/helpers.js";
import WithErrors from "./abc/WithErrors.js";

// '$' = take from locally opened files without caring of the host ip
const LOCALLY_OPENED_FILES = "$";

class FileMakerProtocol extends WithErrors {
  static get _name() {
    return "FileMakerProtocol";
  }

  static callScript({ fileName, netLoc, scriptName, param }) {
    let url = `fmp://${netLoc}/${encodeURIComponent(
      fileName
    )}?script=${encodeURIComponent(scriptName)}`;
    if (typeof param === "string" && param.length > 0) {
      url += `&param=${encodeURIComponent(param)}`;
    }
    // this is dirty
    window.location = url;
  }

  constructor(fileName, netLoc) {
    super();

    if (fileName === undefined) {
      throw this._valueErr("Missing mandatory parameter: fileName");
    }

    this.fileName = fileName;
    this.netLoc = nz(netLoc, LOCALLY_OPENED_FILES);
  }

  callScript(scriptName, param) {
    this.constructor.callScript({
      fileName: this.fileName,
      netLoc: this.netLoc,
      scriptName: scriptName,
      param: param
    });
  }
}

export default FileMakerProtocol;
