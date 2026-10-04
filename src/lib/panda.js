// Picks a fresh panda celebration: scene x accessory x confetti palette x
// message (6 x 5 x 4 x 10 = 1,200 combinations). The scene never repeats any
// of the last 3 shown, so back-to-back celebrations always look different.

export const SCENES = ["dance", "trampoline", "juggle", "roll", "bamboo", "fireworks"];
export const ACCESSORIES = ["crown", "party", "sunglasses", "bow", "grad"];
export const PALETTES = [
  ["#f472b6", "#fbbf24", "#34d399", "#60a5fa"],
  ["#a78bfa", "#f9a8d4", "#fde68a", "#99f6e4"],
  ["#fb7185", "#fdba74", "#fef08a", "#86efac"],
  ["#38bdf8", "#c084fc", "#f0abfc", "#facc15"],
];
export const MESSAGES = [
  "Super gemacht! 🐼",
  "Perfekt! Alles richtig!",
  "Wow, 100 %! 🎉",
  "Fantastisch!",
  "Du bist ein Star! ⭐",
  "Spitze! Kein einziger Fehler!",
  "Wunderbar gemacht! 💖",
  "Der Panda ist stolz auf dich!",
  "Klasse! Weiter so!",
  "Unglaublich gut! 🌟",
];

export const NO_REPEAT = 3;

const pick = (arr, rng) => arr[Math.floor(rng() * arr.length)];

/** history: previously shown scenes, oldest first. */
export function pickCelebration(history = [], rng = Math.random) {
  const recent = history.slice(-NO_REPEAT);
  const allowed = SCENES.filter((s) => !recent.includes(s));
  return {
    scene: pick(allowed, rng),
    accessory: pick(ACCESSORIES, rng),
    palette: pick(PALETTES, rng),
    message: pick(MESSAGES, rng),
  };
}

const HISTORY_KEY = "panda-history";

export function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

export function saveHistory(history) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(-10)));
  } catch {
    // storage unavailable (private mode) -- repeats then only avoided per session
  }
}
