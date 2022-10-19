import { values1 } from "./script3";
import { values2 } from "./script4";


 export function proverka() {
    if(values1.login === values2.login && values1.password === values2.password){

    console.log(true)
    return true
} else {
    return false
}
}