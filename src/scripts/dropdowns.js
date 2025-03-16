document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const button = dropdown.querySelector(".btn");
        const menu = dropdown.querySelector(".dropdown-content");

        button.addEventListener("click", function (event) {
            event.stopPropagation();
            menu.classList.toggle("active");
        });

        document.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
});
