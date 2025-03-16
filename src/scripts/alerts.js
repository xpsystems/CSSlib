document.addEventListener("DOMContentLoaded", function () {
    // Select all alerts with close buttons
    document.querySelectorAll(".alert .close-btn").forEach(button => {
        button.addEventListener("click", function () {
            let alert = this.parentElement;
            alert.style.animation = "fadeOut 0.5s forwards";

            // Remove alert from DOM after animation
            setTimeout(() => {
                alert.remove();
            }, 500);
        });
    });

    // Auto-close alerts after a timeout if 'data-timeout' is set
    document.querySelectorAll(".alert[data-timeout]").forEach(alert => {
        let timeout = alert.getAttribute("data-timeout");
        setTimeout(() => {
            alert.style.animation = "fadeOut 0.5s forwards";
            setTimeout(() => alert.remove(), 500);
        }, timeout);
    });
});
