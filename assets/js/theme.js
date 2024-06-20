const STORAGE_KEY = "theme";
const THEME_ATTR  = "data-theme";
const QUERY_KEY   = "(prefers-color-scheme: dark)";

const themes = {
  LIGHT: "light",
  DARK: "dark",
};

window.matchMedia(QUERY_KEY).addEventListener("change", (e) => {
  const newTheme = e.matches ? themes.DARK : themes.LIGHT;
  setTheme(newTheme);
});

window.onload = initTheme;

function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme) {
    // Storage theme
    setTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia(QUERY_KEY).matches) {
    // system theme
    setTheme(themes.DARK);
  } else {
    // Default theme
    setTheme(themes.LIGHT);
  }

  // Watch for system theme changes
}
initTheme();

function toggleTheme() {
  const theme = getTheme();
  const newTheme = theme === themes.DARK ? themes.LIGHT : themes.DARK;
  setTheme(newTheme);
  localStorage.setItem(STORAGE_KEY, newTheme);
}

function getTheme() {
  return document.documentElement.getAttribute(THEME_ATTR);
}

function setTheme(value) {
  document.documentElement.setAttribute(THEME_ATTR, value);
  // console.log(value)
  // console.log(document.getElementById("seu-logo"))
  
  if( value === themes.LIGHT) {
    if (document.getElementById("seu-logo") !== null) {
      document.getElementById("seu-logo").src = "https://archialgo-com-sources.oss-cn-hangzhou.aliyuncs.com/images/seu-arch-black.jpg";
      document.getElementById("aaa-logo").src = "https://archialgo-com-sources.oss-cn-hangzhou.aliyuncs.com/images/aaa-long-black.jpg";
    }
  }
  else {
    if (document.getElementById("seu-logo") !== null) {
      document.getElementById("seu-logo").src = "https://archialgo-com-sources.oss-cn-hangzhou.aliyuncs.com/images/seu-arch-white.jpg";
      document.getElementById("aaa-logo").src = "https://archialgo-com-sources.oss-cn-hangzhou.aliyuncs.com/images/aaa-long-white.jpg";
    }
  }
}
