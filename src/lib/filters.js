export const DEFAULT_FILTERS = {
  letters: [], // empty = all
  posList: [], // empty = all
  boxes: [], // empty = all
  onlyWrong: false,
  onlyFlagged: false, // "too hard" (swipe-up) words
  pageMin: null,
  pageMax: null,
};

export function applyFilters(words, filters, progressByCard) {
  return words.filter((w) => {
    if (filters.letters.length && !filters.letters.includes((w.head || "?")[0].toUpperCase())) {
      return false;
    }
    if (filters.posList.length && !filters.posList.includes(w.pos)) return false;
    if (filters.pageMin != null && w.page < filters.pageMin) return false;
    if (filters.pageMax != null && w.page > filters.pageMax) return false;

    const p = progressByCard.get(w.id);
    if (filters.boxes.length) {
      const box = p ? p.box : 1;
      if (!filters.boxes.includes(box)) return false;
    }
    if (filters.onlyWrong && (!p || p.lastResult !== "wrong")) return false;
    if (filters.onlyFlagged && (!p || !p.flagged)) return false;
    return true;
  });
}
