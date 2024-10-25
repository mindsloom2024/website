document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const mainNav = document.querySelector("nav ul:nth-of-type(2)");

    // Function to handle resizing the window
    function handleResize() {
        console.log("Resizing window...");
        if (window.innerWidth <= 425) {
            mainNav.style.display = "none"; // Hide main nav on small screens
            menuToggle.style.display = "block"; // Show menu toggle icon
            dropdownMenu.classList.remove("show"); // Hide dropdown if resizing down
            console.log("Small screen: main nav hidden, menu toggle shown");
        } else {
            mainNav.style.display = "flex"; // Show main nav on larger screens
            menuToggle.style.display = "none"; // Hide menu toggle icon
            dropdownMenu.classList.remove("show"); // Ensure dropdown is hidden
            console.log("Large screen: main nav shown, menu toggle hidden");
        }
    }

    // Function to handle scroll on larger screens
    function handleScroll() {
        if (window.innerWidth > 425) {
            if (window.scrollY > 50) {
                menuToggle.style.display = "block";
            } else {
                menuToggle.style.display = "none";
                dropdownMenu.classList.remove("show");
            }
        }
    }

    // Toggle dropdown menu on click of the menu toggle icon
    menuToggle.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
    });

    // Close dropdown if clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdownMenu.contains(event.target) && event.target !== menuToggle) {
            dropdownMenu.classList.remove("show");
        }
    });

    // Add resize and scroll event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initialize the view based on current window size
    handleResize();
});
