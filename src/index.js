import React from "react";
import ReactDOM from "react-dom/client";

// React router dom
import { HashRouter } from "react-router-dom";

// Main style
import "./index.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Leaflet
import "leaflet/dist/leaflet.js";
import "leaflet/dist/leaflet-src.js";

// Imported components
import App from "./components/app";
import TransitionScrollToTop from "./components/transitionScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <TransitionScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);
