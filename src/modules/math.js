// exporter la fonction addition
export function addition(a, b){   
    return a + b;
}

//exportons la fonction multiplication
export function multiplication(a, b){
    return a * b;
}

//exporter fonction soustraire
export function soustraire(a, b){
    return a - b;
}

//exporter function division
export function division(a, b){
    if(b === 0){
      throw new Error("Division par zéro imposible!");  
    }
    return a / b;
}