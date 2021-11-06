let variableOne = 10;
let variableTwo = 20;
let variableThree = 30;
let variableFour= 40;

console.log(variableOne);
console.log(variableTwo);
console.log('age3',age3);
age3='20 jose';
console.log('age3',age3);

let nameOneGlobal = 'FUNCTION GLOBAL';

function fnOne(){
    let nameOne = 'FunctionOne';
    let nameTwo  = 30;

    console.log('nameOne',nameOne);
    console.log('nameOneGlobal dentro de fnOne',nameOneGlobal);
}

function fnTwo(){
    let nameOne = 'FunctionTwo';
    let nameTwo  = 20;

    console.log('nameOne',nameOne);
    console.log('nameOneGlobal dentro de fnTwo',nameOneGlobal);
}

fnOne();
fnTwo();
console.log('nameOneGlobal', nameOneGlobal);