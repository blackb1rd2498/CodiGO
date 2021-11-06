(function(){

    function sumar(a,b){
        return a+b;
    }
    
    function restar(a,b){
        return a-b;
    }

    function dividir(a,b){
        return a/b;
    }
    
    function multiplicar(a,b){
        return a*b;
    }

    function potencia(a,b){
        return a**b;
    }

    function calculadora(){
        let a= parseFloat(prompt("Ingresa el primer numero : "));
        let b= parseFloat(prompt("Ingresa el segundo numero : "))

        console.log('Su suma es :',sumar(a,b))    
        console.log('Su resta es :' ,restar(a,b))
        console.log('Su division es :' ,dividir(a,b))
        console.log('Su multiplicacion es :' ,multiplicar(a,b))
        console.log('Su potencia es :' ,potencia(a,b))
    }
    
    console.log(calculadora());
})();

