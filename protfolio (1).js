// Form submission interactivity
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('form-status').textContent =
      'Thank you for your message! I will get back to you soon.';
    event.target.reset();
  });
  