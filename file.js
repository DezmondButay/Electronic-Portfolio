// Simple form handler
function handleFormSubmit() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        document.getElementById('form-response').innerText = `Thank you for reaching out, ${name}! I'll get back to you soon.`;
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        // Reset the form
        document.querySelector('.contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }

    return false; // prevent default form submission
}

