// 01------- Exports nommés ------------------------

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

//02-----------------Export default (un seul par fichier)----------------
export default function calculer(a, operateur, b){
    const oprs = {
        '+' : addition,
        '-' : soustraire,
        '*' : multiplication,
        '/' : division
    }
    return oprs[operateur]?.(a, b) ?? null;
}

