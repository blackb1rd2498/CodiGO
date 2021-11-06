/*
VARIABLES
    Las variables son contenedoras de valores
    Tipos: 
        let
        const
        var(no recomendable) ¿?
*/

//let
let nombre = 'Fernando';
let quispe;
let edad = 23;
console.log(nombre);
console.log(quispe);

quispe='quispe';
console.log(quispe);

//const
const PI = 3.1415;
console.log(PI);


/* TIPOS DE DATOS */
let user = 'fer'; //string
let age =  23; //number
let isMan = true; //bolean
let isFem = false;
let account = null; //null
let married; //undefined
let hash = Symbol('123456'); //Symbol
let alumno={
    sexo:'f',
    edad:24,
    grado:5
}; //object

console.log(user, typeof user);
console.log(age, typeof age);
console.log(isMan, typeof isMan);
console.log(isFem, typeof isFem);
console.log(account, typeof account);
console.log(married, typeof married);
console.log(hash, typeof hash);
console.log(alumno, typeof alumno);

/* CAMBIAR TIPOS DE DATOS */
let age2 = 30;
let age3 = '30 fer';
console.log(age2, typeof age2);
console.log(age2, String(age2).replace('30', 200));
console.log(age2, typeof Boolean(age2));
console.log(age3, Number(age3).toFixed(2));
