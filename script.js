function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Simple validation for empty fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
    } else {
        alert("Thank you for your message! We'll get back to you soon.");
        // Clear the form
        document.getElementById('contactForm').reset();
    }
});

// You can add JavaScript for your image sliders here later
