
// EJERCICIO 1
function sum(a,b) {
    return a+b;
}

// EJERCICIO 2
function promedioNotas(a,b,c,d) {
    return (a+b+c+d)/4;
}

//EJERCICIO 3
function areaRectangulo(a,b){
    return a*b;
}

//EJERCICIO 4
function areaTriangulo(a,b){
    return (a*b)/2;
}

//EJERCICIO 5
function areaCirculo(a){
    return 3.1415*(a**2);
}

//EJERCICIO 6
function sueldoMensual(a,b){
    return (a*b)*7;
}

//EJERCICIO 7
function metrosApulgadas(a,b){
    a=a/0.0254;
    b=b/0.0254;
    return `Tiene un largo de ${a} pulgadas y ancho de ${b} pulgadas`;
}

//EJERCICIO 8
function solAdolar(a){
    return a*4.03
}

//EJERCICIO 9
function contatrado(edad){
    if(edad>=2002){
        return `Si estas contratado`;
    }else{
        return `No estas contratado`;
    }
}

//EJERCICIO 10
function menor(){
    let edad= parseFloat(prompt("Ingresa tu edad : "));
    let nombre= parseFloat(prompt("Ingresa tu nombre: "));

    let edad1= parseFloat(prompt("Ingresa tu edad : "));
    let nombre1= parseFloat(prompt("Ingresa tu nombre: "));

    let edad2= parseFloat(prompt("Ingresa tu edad : "));
    let nombre2= parseFloat(prompt("Ingresa tu nombre: "));

    if(edad>edad1 && edad1>edad2){
        return `la persona ${nombre2} es el menor con ${edad2}`
    }else if(edad1>edad2 && edad2>edad){
            return `la persona ${nombre} es el menor con ${edad}`
        }else
             return `la persona ${nombre1} es el menor con ${edad1}` 
}

//EJERCICIO 11
function bono(años){
    if(años<2){
        console.log( `Se le dara un bono de $100`)
    } else if(años>=2&&años<5){
        console.log( `Se le dara un bono de $500`)
        }else
        console.log( `Se le dara un bono de $1000`)
}

//EJERCICIO 12
function salario(){
    salarioFijo=1500;
    sueldoAnual=[]

    for (let i = 1; i < 7; i++){
        salarioFijo=salarioFijo+salarioFijo*0.10;

        console.log(`salario por el año ${i} es ${salarioFijo}`);
    }
}

bono(5);