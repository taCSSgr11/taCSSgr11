// Function for navigation bar
document.addEventListener("DOMContentLoaded", function() {
  // Get the navigation bar element
  const links = document.querySelectorAll("#nav a");

  // Add event listener to each link in the navigation bar
  links.forEach(link => {
    link.addEventListener("click", scrollToSection);
  });

  // Function to scroll to the section of the page
  function scrollToSection(event) {
    event.preventDefault();

    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth" // smooth scroll
      });
    }
  }
});

// Function for the "Contact Us" form
document.addEventListener("DOMContentLoaded", function() {
  // Get the form and alert message elements
  const contactForm = document.querySelector("#contact-form");
  const alertMessage = document.querySelector("#alert-message");

  function handleSubmit(event) {
    event.preventDefault();

    // Get the values of the form fields
    // TODO: any validation should happen here, not added yet
    const name = contactForm.querySelector('input[name="Name"]').value;
    const email = contactForm.querySelector('input[name="Email"]').value;
    const message = contactForm.querySelector('textarea[name="Message"]').value;

    // Check if any of the fields are empty
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      // Display an error message on page at the alert message element
      alertMessage.textContent = "Please fill out all fields.";
    } else {
      // Display a success message on page at the alert message element
      alertMessage.textContent = "Form submitted successfully!";
      // TODO: this is where an email would be sent to your email address
      contactForm.reset();
    }
  }

  // Add event listener to the form
  contactForm.addEventListener("submit", handleSubmit);
});