// import "../src/index.js";

import App from "../src/components/App.js";

// window.d = defaultMapConfig;
// console.log(defaultMapConfig);
console.log("script running");
window.addEventListener("load", () => {
  const container = document.getElementById("mapDiv");
  console.log(container);
  if (container) {
    window.APP = new App("mapDiv", { loadMissingMarkup: true });
  }
});
