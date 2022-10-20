
const forma = document.querySelector('.form_singin');
const but = document.querySelector('.form__button_singin');

import { values1 } from "./script3";

export const values2 = {}

function formValueEntry (event) {
    event.preventDefault();

    const login = forma.querySelector('[name = "login"]');
    const password = forma.querySelector('[name = "password"]');

    values2.login =login.value,
    values2.password = password.value


    console.log(values2)

    


function button(event)
{ event.preventDefault();
    if(values1.login === values2.login && values1.password === values2.password){

        console.log(true)
        return true
    } else {
        return false
    }
}


but.addEventListener('submit', button)


}

forma.addEventListener('submit', formValueEntry)
