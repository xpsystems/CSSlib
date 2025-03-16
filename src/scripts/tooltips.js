document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tooltip").forEach(tooltip => {
        const tooltipText = tooltip.querySelector(".tooltip-text");

        tooltip.addEventListener("mouseenter", function () {
            tooltipText.style.visibility = "visible";
            tooltipText.style.opacity = "1";
        });

        tooltip.addEventListener("mouseleave", function () {
            tooltipText.style.visibility = "hidden";
            tooltipText.style.opacity = "0";
        });
    });
});
