const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: email.value.trim(),
        password: password.value.trim(),
    };

    console.log(formData);

    event.currentTarget.reset();
});
