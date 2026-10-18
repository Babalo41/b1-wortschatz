import React, { useState } from "react";

// Fetch a new deploy now instead of waiting for main.jsx's 60 s poll. When a
// new service worker turns up, main.jsx's controllerchange listener reloads
// into it; otherwise a plain reload.
export default function RefreshButton() {
  const [busy, setBusy] = useState(false);

  async function refresh() {
    setBusy(true);
    try {
      const reg = await navigator.serviceWorker?.getRegistration();
      await reg?.update();
      if (reg?.installing || reg?.waiting) {
        setTimeout(() => window.location.reload(), 8000); // in case it never takes over
        return;
      }
    } catch {
      // offline or no service worker: reloading still picks up what it can
    }
    window.location.reload();
  }

  return (
    <button className={busy ? "filter-toggle refresh-btn busy" : "filter-toggle refresh-btn"} onClick={refresh} disabled={busy} aria-label="Neue Version laden">
      ⟳
    </button>
  );
}
