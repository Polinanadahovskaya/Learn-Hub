
const forma = document.querySelector('.form_singin');

export const values2 = {}

function formValueEntry (event) {
    event.preventDefault();

    const login = forma.querySelector('[name = "login"]');
    const password = forma.querySelector('[name = "password"]');

    values2.login =login.value,
    values2.password = password.value


    console.log(values2)


    
}

forma.addEventListener('submit', formValueEntry)