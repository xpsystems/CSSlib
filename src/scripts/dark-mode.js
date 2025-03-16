document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Load saved preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
