 // Close dropdown when clicking outside (for mobile)
document.addEventListener("click", function (event) {
    let dropdowns = document.querySelectorAll(".nav-item.dropdown");
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.querySelector(".dropdown-menu").classList.remove("show");
        }
    });
});

// Landing page animation
