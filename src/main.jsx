import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { initTTS } from "./lib/tts.js";
import { registerSW } from "virtual:pwa-register";

initTTS();

// registerType:"autoUpdate" activates a new service worker as soon as one
// is found, but it still only *looks* for one on registration and on
// each navigation -- for an installed PWA that's rarely closed, that can
// mean a stale app for a long time. Poll for updates periodically so a
// deployed change actually reaches an already-open/installed instance
// instead of silently sitting on the server.
const updateSW = registerSW({
  immediate: true,
  onRegisteredSW(_url, registration) {
    if (!registration) return;
    setInterval(() => registration.update(), 60 * 1000);
  },
});
void updateSW;

// skipWaiting + clientsClaim mean a new service worker takes over
// immediately, but the page's already-loaded HTML/JS doesn't refresh on
// its own -- reload once when control actually changes hands so the new
// build is what the user sees, instead of the old JS running under a new
// worker.
if ("serviceWorker" in navigator) {
  let reloaded = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloaded) return;
    reloaded = true;
    window.location.reload();
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
