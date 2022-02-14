import $ from "jquery";
import L from "leaflet";
import "leaflet.markercluster";

import WithErrors from "./abc/WithErrors.js";
import State from "./State.js";
import TilesProviders from "./TilesProviders.js";

import { defaultMapConfig } from "./MapConfigs.js";
import { separatore } from "./auxiliary/contextmenuItems";

import { objGet, nz } from "./auxiliary/helpers.js";
import {
  checkDialogMarkup,
  CENTERED_MODAL_MARKUP
} from "./auxiliary/dialogs.js";
import "./constants.js";

class App extends WithErrors {
  static get _name() {
    return "App";
  }

  _setupEnv(loadMissingMarkup) {
    // checking html
    if (!checkDialogMarkup()) {
      if (loadMissingMarkup) {
        $(CENTERED_MODAL_MARKUP).appendTo("body");
      } else {
        throw this._runtimeErr("Need exactly 1 dialog html element to work");
      }
    }
  }

  _initMap(htmlMapDiv, mapConfig, mapLeftClick) {
    this.map = L.map(htmlMapDiv, mapConfig);
    if (typeof mapLeftClick === "function") {
      this.map.on("click", mapLeftClick);
    }
  }

  _loadTileProvider(value) {
    if (typeof value === "string") {
      value = objGet(TilesProviders, value, {});
    } else if (typeof value === "object") {
    } else {
      throw this._typeErr(
        "Wrong tilesProviders param type. Should be str[] or obj[]"
      );
    }
    return value;
  }

  _initTileLayer(tp) {
    if (tp.vector) {
      throw this._notImplementedErr("Vector tiles not supported");
    }
    if (tp.epsg !== "3857") {
      throw this._notImplementedErr("EPSG not supported");
    }
    if (tp.type === "xyz") {
      tp._tileLayer = L.tileLayer(tp.url, tp);
    } else if (tp.type === "wms") {
      tp._tileLayer = L.tileLayer.wms(tp.url, tp);
    } else if (tp.type === "wmts") {
      throw this._notImplementedErr("WMTS service not supported");
    } else {
      throw this._valueErr("unknown service type: " + tp.type);
    }
  }

  _decorateMapConfig(mapConfig) {
    if (mapConfig.contextmenuItems instanceof Array) {
      mapConfig.contextmenuItems.forEach((obj) => {
        if (obj === separatore) return;
        obj.callback = (e) => obj.callback(e, this);
      });
    }
  }

  constructor(htmlMapDiv, opts) {
    // must construct parent classes to bind this
    super();

    // opts + defaults
    opts = nz(opts, {});
    let { tilesProviders, mapConfig, mapLeftClick, loadMissingMarkup } = opts;
    tilesProviders = nz(tilesProviders, []);
    mapConfig = Object.assign({}, defaultMapConfig, nz(mapConfig, {}));
    mapLeftClick = nz(mapLeftClick, () => {});

    // check and setup the js/html environment
    this._setupEnv(loadMissingMarkup);

    // contains info about the state of the app
    this.state = new State();

    // get the tilesProviders objects from their names
    this.tilesProviders = (tilesProviders || []).forEach((value) =>
      this._loadTileProvider(value)
    );

    // init map
    this._decorateMapConfig(mapConfig);
    this._initMap(htmlMapDiv, mapConfig, mapLeftClick);

    // init tile layers
    this.tilesProviders.forEach((tp) => this._initTileLayer(tp));

    // default map
    // init like https://gist.github.com/d3noob/7828823
  }
}

export default App;
