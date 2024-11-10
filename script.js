// script.js

// Dynamic Greeting based on Time
document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.createElement("p");
    const currentHour = new Date().getHours();
    let greetText;

    if (currentHour < 12) {
        greetText = "Good morning!";
    } else if (currentHour < 18) {
        greetText = "Good afternoon!";
    } else {
        greetText = "Good evening!";
    }

    greeting.textContent = greetText;
    document.querySelector(".hero").appendChild(greeting); // Adds greeting to the hero section
});

document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("YvNpvLfKidiHWR8hn"); // Initialize EmailJS with your User ID

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const message = form.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            alert("All fields are required. Please fill out the form completely.");
            return;
        }

        const emailParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        // Replace "YOUR_SERVICE_ID" and "YOUR_TEMPLATE_ID" with your actual values
        emailjs.send("service_g5emzbj", "template_eag3gm8", emailParams)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
                form.reset(); // Clear the form
            })
            .catch((error) => {
                console.error("FAILED...", error);
                alert("Failed to send the message. Please try again.");
            });
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const article = button.closest(".article-item");
            const moreText = article.querySelector(".more-text");

            // Toggle the visibility of the additional text
            moreText.style.display = moreText.style.display === "none" ? "block" : "none";

            // Toggle the button text
            button.textContent = moreText.style.display === "block" ? "Show less" : "Read more";
        });
    });
});










































