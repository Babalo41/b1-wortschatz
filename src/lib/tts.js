// speechSynthesis voice lists load asynchronously on first page load
// (especially on iOS Safari) -- if you call speak() before onvoiceschanged
// has fired once, the first tap can be silently swallowed. We cache the
// voice list and refresh it on the event so the *next* speak() call always
// has a voice to pick from.

let cachedVoices = [];
let deVoice = null;

// Tracks the in-flight utterance so it (and its event listeners) can be
// torn down explicitly -- e.g. a card gets swiped away or the component
// unmounts mid-utterance -- rather than left to linger as a queued/playing
// utterance holding references to detached listeners.
let currentUtterance = null;

function refreshVoices() {
  if (!("speechSynthesis" in window)) return;
  cachedVoices = window.speechSynthesis.getVoices();
  deVoice =
    cachedVoices.find((v) => v.lang === "de-DE") ||
    cachedVoices.find((v) => v.lang?.startsWith("de")) ||
    null;
}

export function initTTS() {
  if (!("speechSynthesis" in window)) return;
  refreshVoices();
  window.speechSynthesis.onvoiceschanged = refreshVoices;
}

export function hasGermanVoice() {
  return !!deVoice;
}

function clearCurrentUtterance() {
  if (!currentUtterance) return;
  currentUtterance.onend = null;
  currentUtterance.onerror = null;
  currentUtterance = null;
}

export function stopSpeaking() {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  clearCurrentUtterance();
}

export function speak(text) {
  if (!("speechSynthesis" in window) || !text) return false;
  // Voices might still be empty on the very first call; try a refresh so
  // we don't miss a voice that's actually available already.
  if (!cachedVoices.length) refreshVoices();
  stopSpeaking(); // avoid queueing overlapping utterances, clears any prior listener
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "de-DE";
  if (deVoice) utter.voice = deVoice;
  utter.rate = 0.72;
  utter.onend = clearCurrentUtterance;
  utter.onerror = clearCurrentUtterance;
  currentUtterance = utter;
  try {
    window.speechSynthesis.speak(utter);
    return true;
  } catch {
    clearCurrentUtterance();
    return false;
  }
}
