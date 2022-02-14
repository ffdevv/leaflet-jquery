import Swisstopo from "../../assets/Swisstopo.js";

import { uiDialog } from "./dialogs.js";
import { copyToClipboard } from "./clipboard.js";

const mostraCoordinateWGS84_CH03 = {
  text: "Mostra Coordinate",
  callback: function (e, app) {
    let ch = Swisstopo.WGStoCH(e.latlng.lat, e.latlng.lng);
    let mkup =
      "" +
      `<p><strong>WGS84:</strong> ${e.latlng.lat}, ${e.latlng.lng}</p>` +
      `<p><strong>CH03:</strong> ${ch[0]}, ${ch[1]}</p>`;
    uiDialog("Coordinate", mkup);
  }
};

const copiaCoordinateWGS84 = {
  text: "Copia coord (WGS84)",
  callback: function (e, app) {
    copyToClipboard(e.latlng.lat + ", " + e.latlng.lng);
  }
};

const copiaCoordinateCH03 = {
  text: "Copia coord (CH03)",
  callback: function (e, app) {
    let ch = Swisstopo.WGStoCH(e.latlng.lat, e.latlng.lng);
    copyToClipboard(ch[0] + ", " + ch[1]);
  }
};

const apriSuGoogleMaps = {
  text: "Apri su Google Maps",
  callback: function (e, app) {
    let zoom = "750m";
    let url = `https://www.google.ch/maps/@${[e.latlng.lat, e.latlng.lng].join(
      ","
    )},${zoom}/data=!3m1!1e3`;
    window.open(url, "_blank");
  }
};

const apriSuSwisstopo = {
  text: "Apri su Swisstopo",
  callback: function (e, app) {
    let ch = Swisstopo.WGStoCH(e.latlng.lat, e.latlng.lng);
    let params = [
      "lang=it",
      "topic=ech",
      "bgLayer=ch.swisstopo.pixelkarte-farbe",
      "layers=" +
        [
          "ch.swisstopo.swisstlm3d-karte-farbe",
          // "ch.swisstopo.pixelkarte-farbe-pk50.noscale",        // cn 1:50k
          "ch.swisstopo.pixelkarte-farbe-pk25.noscale", // cn 1:25k
          // "ch.swisstopo.landeskarte-farbe-10",                 // cn 1:10k
          "ch.swisstopo.hiks-siegfried",
          "ch.swisstopo.hiks-dufour",
          "ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill", // confini comunali
          "ch.swisstopo.lubis-luftbilder_schwarzweiss", // foto aeree
          "ch.swisstopo.lubis-terrestrische_aufnahmen", // riprese terrestri georeferenziate
          "ch.swisstopo.swissimage-product_1946", // ricostruzione anni '40
          "ch.swisstopo.zeitreihen" // viaggio nel tempo
        ].join(","),
      "layers_visibility=false,true,false,false,false,false,false,false,false",
      "layers_timestamp=18641231,,,",
      `E=2${ch[0]}`,
      `N=1${ch[1]}`,
      "zoom=7"
    ];
    let url = `https://map.geo.admin.ch/?${params.join("&")}`;
    window.open(url, "_blank");
  }
};

const centraMappaQui = {
  text: "Centra Mappa Qui",
  callback: function (e, app) {
    app.map.panTo(e.latlng);
  }
};

const aggiungiPunto = {
  text: "Aggiungi",
  callback: function (e, app) {
    // let geoJSON = DB.callbacks.std.contextmenu._add(e,false);
    /*
      let lyr = $NEW_DATA._container_lyr;
      let marker = L.marker(e.latlng);
      let feature = marker.toGeoJSON($CONFIG.coordsPrecision); //arg is latlng precision
      feature.properties = {};
      feature.properties.id = create_UUID().toUpperCase();
      lyr.__addData(feature);
      FileMaker.addScheda(feature);
    */
  }
};

const separatore = "-";

const buildContextmenuItem = (text, callback) => ({
  text: text,
  callback: callback
});

export {
  mostraCoordinateWGS84_CH03,
  copiaCoordinateWGS84,
  copiaCoordinateCH03,
  apriSuGoogleMaps,
  apriSuSwisstopo,
  centraMappaQui,
  aggiungiPunto,
  separatore,
  buildContextmenuItem
};
