// Contact form validation
const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector("#formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please complete all required fields.";
            formMessage.className = "form-message error";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.className = "form-message error";
            return;
        }

        formMessage.textContent = "Thank you. Your message has been received.";
        formMessage.className = "form-message success";

        contactForm.reset();
    });
}
// Dynamic services image gallery
const galleryButtons = document.querySelectorAll(".gallery-button");
const galleryImage = document.querySelector("#galleryImage");
const galleryTitle = document.querySelector("#galleryTitle");
const galleryDescription = document.querySelector("#galleryDescription");

if (galleryButtons.length > 0) {
    galleryButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            galleryTitle.textContent = button.dataset.title;
            galleryDescription.textContent = button.dataset.description;
            galleryImage.src = button.dataset.image;
            galleryImage.alt = button.dataset.title + " service preview";
        });
    });
}

// FAQ section toggle
const faqQuestions = document.querySelectorAll(".faq-question");

if (faqQuestions.length > 0) {
  faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
      const answer = question.nextElementSibling;
      answer.classList.toggle("open");
    });
  });
}