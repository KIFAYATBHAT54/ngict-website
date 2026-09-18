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

/* ================================
   NOTIFICATIONS
================================ */

.notification-section {
    padding: 90px 0;
    background: #ffffff;
}

.notification-list {
    max-width: 900px;
    margin: 45px auto 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.notification-card {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 22px 24px;
    background: #ffffff;
    border: 1px solid #e1e6ee;
    border-left: 4px solid #155eef;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(7, 27, 56, 0.06);
    cursor: pointer;
    transition: 0.25s ease;
}

.notification-card:hover {
    transform: translateY(-3px);
    border-color: #155eef;
    box-shadow: 0 14px 32px rgba(7, 27, 56, 0.10);
}

.notification-icon {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #edf3ff;
    color: #155eef;
    font-size: 22px;
    font-weight: 700;
}

.notification-content {
    flex: 1;
}

.notification-label {
    display: block;
    margin-bottom: 5px;
    color: #155eef;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
}

.notification-content h3 {
    margin: 0 0 6px;
    color: #071b38;
    font-size: 17px;
}

.notification-content p {
    margin: 0;
    color: #68758a;
    font-size: 12px;
    line-height: 1.6;
}

.notification-arrow {
    color: #155eef;
    font-size: 25px;
    font-weight: 600;
}


/* ================================
   NOTICE POPUP
================================ */

.notice-modal {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 9999;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(3, 14, 31, 0.82);
}

.notice-modal.show {
    display: flex;
}

.notice-modal-box {
    position: relative;
    max-width: 850px;
    max-height: 92vh;
    background: #ffffff;
    padding: 8px;
    border-radius: 14px;
    overflow: auto;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35);
}

.notice-modal-box img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 88vh;
    object-fit: contain;
    border-radius: 8px;
}

.notice-close {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 2;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: #071b38;
    color: #ffffff;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
}

.notice-close:hover {
    background: #155eef;
}


/* ================================
   MOBILE
================================ */

@media (max-width: 650px) {

    .notification-section {
        padding: 65px 0;
    }

    .notification-list {
        width: 92%;
        margin-top: 35px;
    }

    .notification-card {
        padding: 18px;
        gap: 14px;
    }

    .notification-icon {
        width: 40px;
        height: 40px;
        font-size: 19px;
    }

    .notification-content h3 {
        font-size: 14px;
    }

    .notification-content p {
        font-size: 11px;
    }

    .notification-arrow {
        font-size: 20px;
    }

    .notice-modal {
        padding: 10px;
    }

    .notice-modal-box {
        width: 100%;
        max-height: 90vh;
    }
}
