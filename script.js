document.addEventListener("DOMContentLoaded", function () {
        const navList = document.getElementById("navList");
        const hamburger = document.getElementById("hamburgerIcon");

        hamburger.addEventListener("click", function () {
            if (navList.style.display === "none" || navList.style.display === "") {
                navList.style.display = "block";
            } else {
                navList.style.display = "none";
            }
        });
    });
    
    function toggleNavDisplay() {
        const navList = document.getElementById("navList");
        const hamburger = document.getElementById("hamburgerIcon");

        if (window.innerWidth >= 651) {
            navList.style.display = "flex";
            hamburger.style.display = "none";
        } else {
            navList.style.display = "none";
            hamburger.style.display = "block";
        }
    }

    document.addEventListener("DOMContentLoaded", toggleNavDisplay);
    window.addEventListener("resize", toggleNavDisplay);