
//for loader
window.addEventListener('load', () => {
  const loaderWrapper = document.getElementById('loader-wrapper');
  const content = document.getElementById('content');

  // Ensure the loader shows for 5 seconds
  const loaderDuration = 3000;

  // Debugging: Log the visibility status
  console.log('Loader wrapper:', loaderWrapper.style.display);
  console.log('Content:', content.style.display);

  // Hide the loader and show the content after 5 seconds
  setTimeout(() => {
    loaderWrapper.style.display = 'none';
    content.style.display = 'block';

    // Debugging: Log the visibility status after timeout
    console.log('Loader wrapper after timeout:', loaderWrapper.style.display);
    console.log('Content after timeout:', content.style.display);
  }, loaderDuration);
});

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');

    const items = nav.querySelectorAll('li');
  if (nav.classList.contains('active')) {
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, 100 * (index + 1)); // Stagger the appearance of menu items
    });
  } else {
    items.forEach(item => {
      item.classList.remove('show');
    });
  }
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
