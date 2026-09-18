/* =========================================================
   NGICT WEBSITE
   Next Generation Institute of Computers & Technology
   FINAL JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       01. SMOOTH NAVIGATION
    ===================================================== */

    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       02. COURSE SEARCH
    ===================================================== */

    const courseSearch =
        document.getElementById("courseSearch");

    const clearSearch =
        document.getElementById("clearSearch");

    const noCoursesFound =
        document.getElementById("noCoursesFound");

    const courseCards =
        document.querySelectorAll(
            "#courses .course-card"
        );

    const courseCategories =
        document.querySelectorAll(
            "#courses .course-category"
        );


    if (courseSearch) {

        courseSearch.addEventListener(
            "input",
            function () {

                const searchValue =
                    this.value
                        .trim()
                        .toLowerCase();

                let foundCourses = 0;


                /* Search every course */

                courseCards.forEach(
                    function (card) {

                        const courseName =
                            card.querySelector("h4");

                        if (!courseName) {
                            return;
                        }

                        const courseText =
                            courseName.textContent
                                .trim()
                                .toLowerCase();


                        if (
                            searchValue === "" ||
                            courseText.includes(searchValue)
                        ) {

                            card.style.display = "";

                            foundCourses++;

                        } else {

                            card.style.display = "none";

                        }

                    }
                );


                /* Hide empty categories */

                courseCategories.forEach(
                    function (category) {

                        const cards =
                            category.querySelectorAll(
                                ".course-card"
                            );

                        let visibleCards = 0;


                        cards.forEach(
                            function (card) {

                                if (
                                    card.style.display !==
                                    "none"
                                ) {

                                    visibleCards++;

                                }

                            }
                        );


                        if (
                            searchValue !== "" &&
                            visibleCards === 0
                        ) {

                            category.style.display =
                                "none";

                        } else {

                            category.style.display =
                                "";

                        }

                    }
                );


                /* No result message */

                if (
                    searchValue !== "" &&
                    foundCourses === 0
                ) {

                    noCoursesFound.style.display =
                        "block";

                } else {

                    noCoursesFound.style.display =
                        "none";

                }


                /* Clear button */

                if (searchValue !== "") {

                    clearSearch.style.display =
                        "flex";

                } else {

                    clearSearch.style.display =
                        "none";

                }

            }
        );


        /* Clear Search */

        if (clearSearch) {

            clearSearch.addEventListener(
                "click",
                function () {

                    courseSearch.value = "";

                    courseSearch.dispatchEvent(
                        new Event("input")
                    );

                    courseSearch.focus();

                }
            );

        }

    }


    /* =====================================================
       03. ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".navigation a:not(.nav-button)"
        );


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 160;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY <
                    sectionTop + sectionHeight
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove("active");

                const target =
                    link.getAttribute("href");


                if (
                    target ===
                    "#" + currentSection
                ) {

                    link.classList.add("active");

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* =====================================================
       04. FACULTY CARD EFFECT
    ===================================================== */

    const facultyCards =
        document.querySelectorAll(
            ".team-card"
        );


    facultyCards.forEach(
        function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    this.style.transform =
                        "translateY(-7px)";

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    this.style.transform =
                        "";

                }
            );

        }
    );


    /* =====================================================
       05. COURSE CARD INTERACTION
    ===================================================== */

    const courseCardLinks =
        document.querySelectorAll(
            ".course-card a"
        );


    courseCardLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    const enquiry =
                        document.getElementById(
                            "enquiry"
                        );

                    if (enquiry) {

                        setTimeout(
                            function () {

                                enquiry.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });

                            },
                            50
                        );

                    }

                }
            );

        }
    );


    /* =====================================================
       06. ENQUIRY FORM
    ===================================================== */

    const enquiryForm =
        document.getElementById(
            "enquiryForm"
        );


    if (enquiryForm) {

        enquiryForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "name"
                    ).value.trim();


                const email =
                    document.getElementById(
                        "email"
                    ).value.trim();


                const phone =
                    document.getElementById(
                        "phone"
                    ).value.trim();


                const course =
                    document.getElementById(
                        "course"
                    ).value;


                const message =
                    document.getElementById(
                        "message"
                    ).value.trim();


                /* Required fields */

                if (
                    !name ||
                    !email ||
                    !course
                ) {

                    alert(
                        "Please fill in your name, email address and select a course."
                    );

                    return;

                }


                /* Email validation */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    !emailPattern.test(email)
                ) {

                    alert(
                        "Please enter a valid email address."
                    );

                    return;

                }


                /* Success */

                alert(
                    "Thank you, " +
                    name +
                    ". Your enquiry has been prepared successfully."
                );


                /*
                 * Form data is currently handled
                 * on the client side.
                 *
                 * A service such as Formspree can
                 * be connected later for actual
                 * email delivery.
                 */


                console.log(
                    "NGICT Enquiry Submitted"
                );


                console.log(
                    "Name:",
                    name
                );


                console.log(
                    "Email:",
                    email
                );


                console.log(
                    "Phone:",
                    phone
                );


                console.log(
                    "Course:",
                    course
                );


                console.log(
                    "Message:",
                    message
                );


                enquiryForm.reset();

            }
        );

    }


    /* =====================================================
       07. FORM RESET
    ===================================================== */

    if (enquiryForm) {

        enquiryForm.addEventListener(
            "reset",
            function () {

                setTimeout(
                    function () {

                        if (clearSearch) {
                            clearSearch.style.display =
                                "none";
                        }

                    },
                    50
                );

            }
        );

    }


    /* =====================================================
       08. WEBSITE STATUS
    ===================================================== */

    console.log(
        "NGICT Website Loaded Successfully."
    );

});
