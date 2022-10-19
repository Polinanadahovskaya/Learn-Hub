
const forma = document.querySelector('.form_singin');

function formValueEntry (event) {
    event.preventDefault();

    const login = forma.querySelector('[name = "login"]');
    const password = forma.querySelector('[name = "password"]');

    const values2 = {
        login: login.value,
        password: password.value
    };

    console.log(values2)
    
}

forma.addEventListener('submit', formValueEntry)


console.log(formValueEntry.values2.login)