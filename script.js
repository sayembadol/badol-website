/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking a link */

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});



/* =========================
   PORTFOLIO FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");

const portfolioItems = document.querySelectorAll(".portfolio-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {


        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter = button.getAttribute("data-filter");


        portfolioItems.forEach(item => {


            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });


    });

});



/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name = document.getElementById("name").value;


    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );


    contactForm.reset();

});



/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();