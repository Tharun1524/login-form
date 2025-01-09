document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = form.querySelector('input[type="text"]');
    const phoneInput = form.querySelector('input[type="tel"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');
    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const submitError = document.getElementById('submit-error');

    // Helper function to validate email
    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    form.addEventListener('submit', (e) => {
        let isValid = true;

        // Validate Full Name
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Validate Phone Number
        if (phoneInput.value.trim() === '' || !/^\d{3} \d{3} \d{4}$/.test(phoneInput.value)) {
            phoneError.style.display = 'block';
            isValid = false;
        } else {
            phoneError.style.display = 'none';
        }

        // Validate Email
        if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }

        // If form is invalid, prevent submission
        if (!isValid) {
            submitError.style.display = 'block';
            e.preventDefault();
        } else {
            submitError.style.display = 'none';
            alert('Form submitted successfully!');
        }
    });
});
