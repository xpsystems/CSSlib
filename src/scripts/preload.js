document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("preloader");

    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1000); // Delay of 1s
});
