import {
  mostraCoordinateWGS84_CH03,
  copiaCoordinateWGS84,
  copiaCoordinateCH03,
  apriSuGoogleMaps,
  apriSuSwisstopo,
  centraMappaQui,
  separatore
} from "./auxiliary/contextmenuItems.js";

const defaultMapConfig = {
  // zooming
  minZoom: 0,
  maxZoom: 20,
  center: [46.189807600394904, 9.0149645189757578],
  zoom: 12,

  // menu
  contextmenu: true,
  contextmenuWidth: 140,
  contextmenuItems: [
    mostraCoordinateWGS84_CH03,
    copiaCoordinateWGS84,
    copiaCoordinateCH03,
    separatore,
    apriSuGoogleMaps,
    apriSuSwisstopo,
    centraMappaQui
  ]
};

export { defaultMapConfig };
