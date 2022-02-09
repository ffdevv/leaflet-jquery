const TilesProviders = {
  "google.hybrid": {
      id:"google.hybrid",
      type: "xyz",      
      label : "Satellite Ibrida (Google)",
      url : 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga',
      vectorTiles : false,
      attribution : 'Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>',
      maxNativeZoom: 18,
      maxZoom: 20
    },
  "google.roadmap": {
      id:"google.roadmap",
      type: "xyz",      
      label : "Stradale (Google)",
      url : 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga',
      vectorTiles : false,
      attribution : 'Map data &copy; <a href="https://www.google.com/maps">Google Maps</a>',
      maxNativeZoom: 18,
      maxZoom: 20
    },
  "ac.045_1.piani_corografici_bn": {
      id:"ac.045_1.piani_corografici_bn",
      type: "wms",      
      label : "Piano Corografico BN (AC)",
      url : 'https://wms.intranet.geo.ti.ch/service',
      format : 'image/png',
      epsg : '3857',
      layers : "ac.045_1.piani_corografici_bn",
      transparent : "true",
      vectorTiles : false,
      attribution : 'Map data &copy; <a href="https://wmts.intranet.geo.ti.ch/">Amministrazione Cantonale</a>',
      maxNativeZoom: 18,
      maxZoom: 20
    },
  "ch.ti.052_1.piano_base_mu_ch_colori": {
      id:"ch.ti.052_1.piano_base_mu_ch_colori",
      type: "wms",      
      label : "Piano Base MU (AC)",
      url : 'https://wms.intranet.geo.ti.ch/service',
      format : 'image/png',
      epsg : '3857',
      layers : "ch.ti.052_1.piano_base_mu_ch_colori",
      transparent : "true",
      vectorTiles : false,
      attribution : 'Map data &copy; <a href="https://wmts.intranet.geo.ti.ch/">Amministrazione Cantonale</a>',
      maxNativeZoom: 18,
      maxZoom: 20
    },
  "swisstopo.swissimage": {
      id:"swisstopo.swissimage",
      type: "xyz",      
      label : "Aerea (Swisstopo)",
      url : 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/{datestamp}/{epsg_code}/{z}/{x}/{y}.jpeg',
      epsg : '3857',
      datestamp : 'current',
      vectorTiles : false,
      attribution : 'Map data &copy; <a href="https://swisstopo.admin.ch/">Swisstopo</a>',
      maxNativeZoom: 18,
      maxZoom: 20
    },
  "swisstopo.siegfried": {
      id:"swisstopo.siegfried",
      type: "xyz",      
      label : "Siegfried 2 (Swisstopo)",
      url : 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.hiks-siegfried/default/{datestamp}/{epsg_code}/{z}/{x}/{y}.png',
      epsg : '3857',
      datestamp : 'current',
      vectorTiles : false,
      attribution : 'Map data &copy; <a href="https://swisstopo.admin.ch/">Swisstopo</a>',
      maxNativeZoom: 18,
      maxZoom: 20
    },
  "swisstopo.dufour": {
      id:"swisstopo.dufour",
      type: "xyz",      
      label : "Dufour (Swisstopo)",
      url : 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.hiks-dufour/default/{datestamp}/{epsg_code}/{z}/{x}/{y}.png',
      epsg : '3857',
      datestamp : 'current',
      vectorTiles : false,
      attribution : 'Map data &copy; <a href="https://swisstopo.admin.ch/">Swisstopo</a>',
      maxNativeZoom: 18,
      maxZoom: 20
    },
  "swisstopo.pk25.current": {
      id:"swisstopo.pk25.current",
      type: "xyz",      
      label : "CN25 Attuale (Swisstopo)",
      url : 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe-pk25.noscale/default/{datestamp}/{epsg_code}/{z}/{x}/{y}.jpeg',
      epsg : '3857',
      datestamp : 'current',
      vectorTiles : false,
      attribution : 'Map data &copy; <a href="https://swisstopo.admin.ch/">Swisstopo</a>',
      maxNativeZoom: 18,
      maxZoom: 20
    }
}

export {
  TilesProviders,
};
