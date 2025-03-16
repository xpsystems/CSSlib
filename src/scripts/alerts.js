document.addEventListener("DOMContentLoaded", function () {
    const alerts = document.querySelectorAll(".alert[data-timeout]");
    
    alerts.forEach(alert => {
        const timeout = parseInt(alert.getAttribute("data-timeout"), 10);
        setTimeout(() => {
            alert.style.opacity = "0";
            setTimeout(() => alert.remove(), 300);
        }, timeout);
    });
});
