class State {
  constructor() {
    // contains the name of the state (can be tweaked to customize behaviours)
    this.name = "";
    // contains arguments that shall be used in this state.name ctx
    this.args = {};
    // contains reference to ALL the layers displayed in the map
    this.layers = [];
    // contains reference to ALL the features groups displayed in the map
    this.layerGroups = [];
  }

  setNamedArgs(name, args) {
    this.args[name] = args;
  }

  getNamedArgs(name) {
    return this.args[name];
  }

  getArgs() {
    if (!this.name) {
      return {};
    }
    return this.getNamedArgs(this.name);
  }

  addLayer(layer) {
    this.layers.push(layer);
  }
  rmLayer(layer) {
    let layerId = layer._leaflet_id;
    if (layerId === undefined) {
      return false;
    }
    for (let i = 0; i < this.layers.length; i++) {
      if (this.layers[i]._leaflet_id === layerId) {
        this.layers.splice(i, 1);
        return true;
      }
    }
  }
  resetLayers() {
    this.layers = [];
  }

  addLayerGroup(layerGroup) {
    this.layerGroups.push(layerGroup);
  }
  rmLayerGroup(layerGroup) {
    let layerId = layerGroup._leaflet_id;
    if (layerId === undefined) {
      return false;
    }
    for (let i = 0; i < this.layers.length; i++) {
      if (this.layerGroups[i]._leaflet_id === layerId) {
        this.layerGroups.splice(i, 1);
        return true;
      }
    }
  }
  resetLayerGroups() {
    this.layerGroups = [];
  }
}

export default State;
