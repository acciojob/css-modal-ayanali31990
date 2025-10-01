//your JS code here. If required.
 const modal = document.getElementById("myModal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close-modal");

    // Open modal
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    // Close modal on close button
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal when clicking outside content
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });