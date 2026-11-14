const toggle = document.querySelector(".theme-toggle");
const root = document.documentElement;
const key = "blueoceaniot-theme";

function applyTheme(dark) {
  root.dataset.theme = dark ? "dark" : "light";
  toggle.setAttribute("aria-pressed", String(dark));
  document.querySelector('meta[name="theme-color"]').content = dark ? "#071d2b" : "#f4fbfc";
}

let savedTheme;
try {
  savedTheme = localStorage.getItem(key);
} catch {
  // Storage can be unavailable in local previews.
}
applyTheme(savedTheme === "dark");
toggle.hidden = false;

toggle.addEventListener("click", () => {
  applyTheme(root.dataset.theme !== "dark");
  try {
    localStorage.setItem(key, root.dataset.theme);
  } catch {
    // The theme still applies for this visit.
  }
});
