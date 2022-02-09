import {WithErrors} from './abc/WithErrors.js';

import {State} from './State.js';
import {TilesProviders} from './TilesProviders.js';
import {MapConfigs} from './MapConfigs.js';

import { 
  checkLeaflet, 
  checkLeafletMarkercluster,
  checkLeafletTileLayerSwiss,
  checkJQuery,
  checkSwisstopo,
  loadScript, 
  objGet 
} from './auxiliary/helpers.js';
import {
  checkDialogMarkup
} from './auxiliary/dialogs.js';
import './constants.js';

class App extends WithErrors{
  static get _name() { return 'App'; }
  
  _setupEnv = () => {  
    // checking html
    if (! checkDialogMarkup()){
      throw this._runtimeErr('HTML missing or having too many dialog markups');
    }
  }
  
  _initMap(htmlMapDiv, mapConfig, mapLeftClick){
    this.map = L.map(htmlMapDiv, mapConfig);
    if (typeof mapLeftClick === 'function'){
      this.map.on("click", mapLeftClick);
    }
  }
  
  _loadTileProvider(value){
    if (typeof value === 'string'){
      value = objGet(TilesProviders, value, {});
    } else if (typeof value === 'object'){} else {
      throw this._typeErr('Wrong tilesProviders param type. Should be str[] or obj[]');
    }
    return value;
  }
  
  _initTileLayer(tp){
    if(tp.vector){
      throw this._notImplementedErr("Vector tiles not supported");
    }
    if(tp.epsg !== '3857'){
      throw this._notImplementedErr("EPSG not supported");
    }
    if(tp.type === 'xyz'){
      tp._tileLayer = L.tileLayer(tp.url, tp);
    } else if(tp.type === 'wms'){
      tp._tileLayer = L.tileLayer.wms(tp.url, tp);
    } else if(tp.type === 'wmts'){
      throw this._notImplementedErr("WMTS service not supported");
    } else {
      throw this._valueErr("unknown service type: " + tp.type);
    }
  }
  
  constructor(
    htmlMapDiv, 
    {
      tilesProviders,
      mapConfig,
      mapLeftClick,
    }
  ){
    // defaults
    tilesProviders = nz(tilesProviders, []);
    mapConfig = Object.assign({}, MapConfigs.default, nz(mapConfig, {}));
    mapLeftClick = nz(mapLeftClick, ()=>{});

    // check and setup the js/html environment
    _setupEnv();
    
    
    // contains info about the state of the app
    this.state = new State();
    
    // get the tilesProviders objects from their names
    this.tilesProviders = (tilesProviders || []).forEach(value => (this._loadTileProvider(value)));
      
    // init map
    this._initMap(htmlMapDiv, mapConfig, mapLeftClick);
    
    // init tile layers
    this.tilesProviders.forEach(tp => (this._initTileLayer(tp)));
  }
}

export {
  App,
};
