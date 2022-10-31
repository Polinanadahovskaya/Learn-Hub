const form = document.querySelector('.form_singup');

export const values1 = {};

function formValue (event) {
    event.preventDefault();

    const login = form.querySelector('[name = "login"]');
    const telephone = form.querySelector('[name = "telephone"]');
    const email = form.querySelector('[name = "Email"]');
    const password = form.querySelector('[name = "password"]');

    values1.login = login.value;
    values1.telephone = telephone.value;
    values1.email = email.value;
    values1.password = password.value


    console.log(values1)
}

form.addEventListener('submit', formValue)
