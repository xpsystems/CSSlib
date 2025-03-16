import "./preload.js";
import "./dark-mode.js";
import './alerts.js';
import './dropdowns.js';
import './tooltips.js';
import './modal.js';

console.log("CSSlib Loaded Successfully!");

document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
