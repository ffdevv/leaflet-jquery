class State {
  constructor(){
    // contains the name of the state (can be tweaked to customize behaviours)
    this.name = '';
    // contains arguments that shall be used in this state.name ctx
    this.args = {};
    // contains reference to ALL the layers displayed in the map
    this.layers = [];
    // contains reference to ALL the features groups displayed in the map
    this.layerGroups = [];
  }
  
  setNamedArgs = function(name, args){
    this.args[name] = args;
  }
  
  getNamedArgs = function(name){
    return this.args[name];
  }
  
  getArgs = function(){
    if (! this.name){ return {}; }
    return this.getNamedArgs(this.name);
  }
  
  addLayer = function(layer){
    this.layers.push(layer);
  }
  rmLayer = function(layer){
    let layerId = layer._leaflet_id;
    if (layerId === undefined){return false;}
    for (let i=0; i < this.layers.length; i++){
      if (this.layers[i]._leaflet_id == layerId){
        this.layers.splice(i, 1);
        return true;
      }
    }
  }
  resetLayers = function(){ this.layers = []; }
  
  addLayerGroup = function(layerGroup){
    this.layerGroups.push(layerGroup);
  }
  rmLayerGroup = function(layerGroup){
    let layerId = layerGroup._leaflet_id;
    if (layerId === undefined){return false;}
    for (let i=0; i < this.layers.length; i++){
      if (this.layerGroups[i]._leaflet_id == layerId){
        this.layerGroups.splice(i, 1);
        return true;
      }
    }
  }
  resetLayerGroups = function(){ this.layerGroups = []; }
}

export {
  State,
};
