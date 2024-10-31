//Email using EmailJs

// Initialize EmailJS with your User ID
emailjs.init("Q_Zeib6NyiIsNhTtX"); // Your actual EmailJS user ID

document.getElementById("request-button").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get input values
    const firstName = document.getElementById("first-name").value;
    const email = document.getElementById("email").value;

    // Validate fields
    if (!firstName || !email) {
        showAlert("Please fill out all required fields.", "error");
        return;
    }

    // EmailJS parameters
    const templateParams = {
        from_name: firstName,  // Ensure this matches your EmailJS template
        email_id: email,       // Ensure this matches your EmailJS template
    };

    // Send email using the updated EmailJS SDK
    emailjs.send("service_su9ipp5", "template_ybc68hp", templateParams)
        .then(function (response) {
            showAlert("Your request has been sent successfully!", "success");
            // Clear the input fields after successful submission
            document.getElementById("first-name").value = '';
            document.getElementById("email").value = '';
        }, function (error) {
            showAlert("There was an error sending your request: " + error.text, "error");
        });
});

// Function to display alert messages
function showAlert(message, type) {
    const alertMessageDiv = document.getElementById("alert-message");
    alertMessageDiv.textContent = message;
    alertMessageDiv.className = `alert ${type}`; 
    alertMessageDiv.style.display = 'block';

    // Hide the alert after a few seconds
    setTimeout(() => {
        alertMessageDiv.style.display = 'none'; 
    }, 3000);
}


//Menu-Toggle

// Document ready function
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle"); // Hamburger icon
    const closeMenu = document.querySelector(".close-menu"); // Close icon
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const mainNav = document.querySelector("nav ul:nth-of-type(2)");

    // Function to handle resizing the window
    function handleResize() {
        if (window.innerWidth < 842) {
            mainNav.style.display = "none"; // Hide main nav on small screens
            menuToggle.style.display = "block"; // Show menu toggle icon
            closeMenu.style.display = "none"; // Hide close icon initially
        } else {
            mainNav.style.display = "flex"; // Show main nav on larger screens
            menuToggle.style.display = "none"; // Hide menu toggle icon
            closeMenu.style.display = "none"; // Hide close icon on larger screens
            dropdownMenu.classList.remove("show"); // Ensure dropdown is hidden
        }
    }

    // Function to handle scroll on larger screens
    function handleScroll() {
        if (window.innerWidth >= 842) {
            if (window.scrollY > 50) {
                menuToggle.style.display = "block";
                closeMenu.style.display = "none";
            } else {
                menuToggle.style.display = "none";
                dropdownMenu.classList.remove("show");
            }
        }
    }

    // Toggle dropdown menu on click of the menu toggle icon
    menuToggle.addEventListener("click", function () {
        dropdownMenu.classList.toggle("show");
        menuToggle.style.display = "none"; // Hide hamburger icon
        closeMenu.style.display = "block"; // Show close icon
    });

    // Close dropdown menu on click of the close icon
    closeMenu.addEventListener("click", function () {
        dropdownMenu.classList.remove("show");
        closeMenu.style.display = "none"; // Hide close icon
        menuToggle.style.display = "block"; // Show hamburger icon
    });

    // Close dropdown if clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdownMenu.contains(event.target) && event.target !== menuToggle && event.target !== closeMenu) {
            dropdownMenu.classList.remove("show");
            closeMenu.style.display = "none"; // Hide close icon
            menuToggle.style.display = "block"; // Show hamburger icon
        }
    });

    // Add resize and scroll event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initialize the view based on current window size
    handleResize();
});


//hero-head appearance

document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll(".transition-heading");
    headings.forEach((heading, index) => {
        setTimeout(() => {
            heading.classList.add("show");
        }, index * 300); // Delay each heading by 300ms for a cascading effect
    });
});




//Service Ul appearance

document.addEventListener("DOMContentLoaded", function () {
    const serviceSection = document.getElementById("services-section");
    const listItems = document.querySelectorAll(".service-ul li");

    // Function to check if the services section is in view
    function isSectionInView() {
        const sectionRect = serviceSection.getBoundingClientRect();
        return sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;
    }

    // Function to add animation to list items
    function animateListItems() {
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("visible");
            }, index * 350); // Adjust delay (150ms) for staggered effect
        });
    }

    // Event listener for scrolling
    window.addEventListener("scroll", function () {
        if (isSectionInView()) {
            animateListItems();
            // Remove scroll event after animation completes
            window.removeEventListener("scroll", arguments.callee);
        }
    });
});
