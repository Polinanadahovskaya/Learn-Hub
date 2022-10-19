const form = document.querySelector('.form_singup');

function formValue (event) {
    event.preventDefault();

    const login = form.querySelector('[name = "login"]');
    const telephone = form.querySelector('[name = "telephone"]');
    const email = form.querySelector('[name = "Email"]');
    const password = form.querySelector('[name = "password"]');

    const values1 = {
        login: login.value,
        telephone: telephone.value,
        email: email.value,
        password: password.value
    };

    console.log(values1)
}

form.addEventListener('submit', formValue)
