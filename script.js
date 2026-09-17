/* =========================================
   NGICT - FINAL JAVASCRIPT
========================================= */


/* =========================================
   CONTACT DETAILS
========================================= */

const WHATSAPP_NUMBER = "+91 xxxxx xxxxx";
const EMAIL_ADDRESS = "EXAMPLE@gmail.com";


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   ENQUIRY FORM
========================================= */

const enquiryForm =
    document.querySelector("#enquiryForm");


if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.querySelector("#name").value.trim();

        const email =
            document.querySelector("#email").value.trim();

        const phone =
            document.querySelector("#phone").value.trim();

        const course =
            document.querySelector("#course").value;

        const message =
            document.querySelector("#message").value.trim();


        /* NAME */

        if (name === "") {

            alert("Please enter your full name.");

            document.querySelector("#name").focus();

            return;

        }


        /* EMAIL */

        if (email === "") {

            alert("Please enter your email address.");

            document.querySelector("#email").focus();

            return;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            document.querySelector("#email").focus();

            return;

        }


        /* COURSE */

        if (course === "") {

            alert("Please select a course.");

            document.querySelector("#course").focus();

            return;

        }


        /* =========================================
           CREATE MESSAGE
        ========================================= */

        const enquiryMessage =

            "📚 NEW COURSE ENQUIRY" +

            "\n\n" +

            "👤 Name: " + name +

            "\n📧 Email: " + email +

            "\n📞 Phone: " +
            (phone || "Not provided") +

            "\n🎓 Course: " + course +

            "\n💬 Message: " +
            (message || "No message provided");


        /* =========================================
           WHATSAPP
        ========================================= */

        const whatsappURL =

            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(enquiryMessage);


        /* =========================================
           EMAIL
        ========================================= */

        const emailSubject =
            "New Course Enquiry - " + course;


        const emailBody =

            "NEW COURSE ENQUIRY" +

            "\n\n" +

            "Name: " + name +

            "\nEmail: " + email +

            "\nPhone: " +
            (phone || "Not provided") +

            "\nCourse: " + course +

            "\nMessage: " +
            (message || "No message provided");


        const mailtoURL =

            "mailto:" +
            EMAIL_ADDRESS +

            "?subject=" +
            encodeURIComponent(emailSubject) +

            "&body=" +
            encodeURIComponent(emailBody);

        /* =========================================
           OPEN EMAIL
        ========================================= */

        setTimeout(function() {

            window.location.href =
                mailtoURL;

        }, 500);


        /* =========================================
           RESET
        ========================================= */

        enquiryForm.reset();

    });

}


/* =========================================
   COURSE SEARCH
========================================= */

const coursesSection =
    document.querySelector("#courses");


if (coursesSection) {

    const searchBox =
        document.createElement("input");


    searchBox.type = "search";

    searchBox.placeholder =
        "🔍 Search courses...";

    searchBox.id = "courseSearch";


    coursesSection.insertBefore(
        searchBox,
        coursesSection.firstElementChild
    );


    searchBox.addEventListener(
        "input",
        function() {

            const searchText =
                this.value.toLowerCase();


            const courseCards =
                coursesSection.querySelectorAll(
                    "article"
                );


            courseCards.forEach(card => {

                const text =
                    card.textContent.toLowerCase();


                if (
                    text.includes(searchText)
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        }
    );

}


/*
=========================================
   IMAGE HOVER EFFECT
========================================= */

const images =
    document.querySelectorAll(
        "#home img, #about img, footer img"
    );


images.forEach(img => {

    img.addEventListener(
        "mouseenter",
        function() {

            this.style.transform =
                "scale(1.04)";

        }
    );


    img.addEventListener(
        "mouseleave",
        function() {

            this.style.transform =
                "scale(1)";

        }
    );

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        "main section article"
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

});


function revealOnScroll() {

    revealElements.forEach(element => {

        const position =
            element.getBoundingClientRect().top;


        if (
            position <
            window.innerHeight - 70
        ) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.createElement("button");


backToTop.id = "backToTop";

backToTop.innerHTML = "↑";

backToTop.title =
    "Back to Top";


document.body.appendChild(
    backToTop
);


window.addEventListener(
    "scroll",
    function() {

        if (window.scrollY > 400) {

            backToTop.style.display =
                "block";

        } else {

            backToTop.style.display =
                "none";

        }

    }
);


backToTop.addEventListener(
    "click",
    function() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================
   CURRENT YEAR
========================================= */

const footer =
    document.querySelector("footer");


if (footer) {

    const footerParagraphs =
        footer.querySelectorAll("p");


    if (footerParagraphs.length > 0) {

        footerParagraphs[
            footerParagraphs.length - 1
        ].textContent =

            "© " +
            new Date().getFullYear() +
            " Next Generation Institute of Computers and Technology. All Rights Reserved.";

    }

}


/* =========================================
   WEBSITE READY
========================================= */

console.log(
    "NGICT Website Loaded Successfully."
);

console.log(
    "WhatsApp: +91 6006698636"
);

console.log(
    "Email: kifayatbhat54@gmail.com"
);