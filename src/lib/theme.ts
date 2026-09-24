export const THEME_STORAGE_KEY = "field-atlas-theme";

/** Inline script run before paint, so a stored night theme never flashes day first. */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t;}catch(e){}})();`;
