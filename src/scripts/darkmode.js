document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    body.setAttribute("data-theme", savedTheme);

    // Update button text based on current theme
    updateDarkModeButton(savedTheme);

    darkModeToggle.addEventListener("click", function () {
        const currentTheme = body.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        updateDarkModeButton(newTheme);
    });

    function updateDarkModeButton(theme) {
        darkModeToggle.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
    }
});
