// check if the Leaflet global L is initialized in the window scope and if its main methods are available
const checkLeaflet = () => {
  return (
      typeof window.L === 'object' &&
      typeof window.L.map === 'function' &&
      typeof window.L.tileLayer === 'function' &&
      typeof window.L.control === 'function' &&
      typeof window.L.marker === 'function' &&
      typeof window.L.DivIcon === 'function' &&
      typeof window.L.Point === 'function' &&
      typeof window.L.DomUtil === 'object'
  );
};

// check if the MarkerCluster plugin is initialized for Leaflet
const checkLeafletMarkercluster = () => {
  return (
    typeof window.L.markerClusterGroup === 'function'
  );
};

// check if the Leaflet tileLayer plugin for swiss coords is initialized
const checkLeafletTileLayerSwiss = () => {
  return (
    typeof L.tileLayer.swiss === 'function'
  );
};

// check if jquery is initialized
const checkJQuery = () => (!!window.jQuery)

// check if Swisstopo is initialized
const checkSwisstopo = () => {
  return (
    typeof window.Swisstopo === 'object' &&
    typeof window.Swisstopo.CHtoWGS === 'function' &&
    typeof window.Swisstopo.WGStoCH === 'function'
  );
};

// create a script element with the specified source
// then append to body and (optionally) callback when it's loaded
const loadScript = (src, callback) => {
  let script = document.createElement('script');
  script.src = src;
  if (typeof callback === 'function') {
    script.addEventListener('load', callback);
  }
  document.body.appendChild(script);
};

// like dict.get(key, fallback) in python
const objGet = (obj, key, fallback) => {
  return ((obj.hasOwnProperty(key)) ? obj[key] : fallback);
};

// like nz in VBA
const nz = (var_, fallback) => {
  return ((v === undefined || v === null) ? fallback : var_);
};

/**
 * String manipulation
*/
const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;'
};
// Regex containing the keys listed immediately above.
const htmlEscapesRx = /[&<>"'\/]/g;

// Escape a string in HTML.
const stringToHtml = (string) => {
  return ('' + string).replace(htmlEscapesRx, match => htmlEscapes[match]);
};

const rn2br = (stringa, br) => {
  br = nz(br, '<br/>');
  return (
    stringa.replace(/\r\n/g, "\n")
           .replace(/\r/g, "\n")
           .replace(/\n/g, br)
  );
};

const stringToHtmlWBr = string => rn2br(stringToHtml(string));

export {
  checkLeaflet,
  checkLeafletMarkercluster,
  checkLeafletTileLayerSwiss,
  checkJQuery,
  checkSwisstopo,
  loadScript,
  
  objGet,
  nz,
  
  stringToHtml,
  rn2br,
  stringToHtmlWBr,
};
