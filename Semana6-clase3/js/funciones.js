/*
Existen 2 tipos de funciones
    1. Las que retornan valores
    2. Las que hacen procesos.
*/
function sumar (a,b){
    return a+b;
}

function restar (a,b){
    return a-b;
}

console.log(sumar(2,3));
console.log(sumar(3,4));
console.log(sumar(4,5));


console.log(restar(5,4));
console.log(restar(4,3));
console.log(restar(3,1));

function calculadora(){
    let a = parseFloat(prompt('Ingresa el primer numero'));
    let b = parseFloat(prompt('Ingresa el segundo numero'));

    console.log('sumar a + b =', sumar(a,b));
    console.log('restar a - b =', restar(a,b));
}

calculadora(); 

(function(){    
    function calculadoraPROTEGIDA(){
        let a = parseFloat(prompt('Ingresa el primer numero'));
        let b = parseFloat(prompt('Ingresa el segundo numero'));

        console.log('sumar a + b =', sumar(a,b));
        console.log('restar a - b =', restar(a,b));
    }

    calculadora(); 
})();
