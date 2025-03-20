document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-modal]").forEach(button => {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      const closeModalBtn = modal.querySelector(".modal-close");
      const modalOverlay = document.getElementById("modalOverlay");
  
      button.addEventListener("click", function () {
        modal.classList.add("active");
        modalOverlay.classList.add("active");
      });
  
      closeModalBtn.addEventListener("click", function () {
        modal.classList.remove("active");
        modalOverlay.classList.remove("active");
      });
  
      window.addEventListener("click", function (event) {
        if (event.target === modalOverlay) {
          modal.classList.remove("active");
          modalOverlay.classList.remove("active");
        }
      });
    });
  });
  