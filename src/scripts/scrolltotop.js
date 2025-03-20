document.addEventListener("DOMContentLoaded", function () {
    // Create the button element
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.id = "scrollTopBtn";
    scrollTopBtn.innerHTML = "&#8679;"; // Up arrow icon
    // Append the button to the body
    document.body.appendChild(scrollTopBtn);
  
    // Show the button when scrolled down 300px from the top
    window.addEventListener("scroll", function () {
      if (document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "flex";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });
  
    // Smooth scroll to top when button is clicked
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  