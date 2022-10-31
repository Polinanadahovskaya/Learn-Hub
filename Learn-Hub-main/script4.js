
const forma = document.querySelector('.form_singin');
const but = document.querySelector('.form__button_singin');

import { values1 } from "./script3.js";

export const values2 = {}

function formValueEntry (event) {
    event.preventDefault();

    const login = forma.querySelector('[name = "login"]');
    const password = forma.querySelector('[name = "password"]');

    values2.login =login.value,
    values2.password = password.value

    console.log(values1);
    console.log(values2)

    


function clickButton()
{ 
    console.log('object');
    if(values1.login === values2.login && values1.password === values2.password){

        console.log(true)
        return true
    } else {
        return false
    }
}

const isValidLogin = clickButton();
console.log(isValidLogin);

}

forma.addEventListener('submit', formValueEntry)
