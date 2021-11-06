//use alt+96 to create `` and you can use them to add variable into returns


/*
    TYPE OF CONDITIONALS / TIPOS DE CONDICIONALES
*/

/* IF ELSE */

const AGE_MAX=18;
const SEX = 'm';

function welcome(name){
    return `Welcome to the bar ${name}`;
}

function notWelcome(name){
    return `You are not welcome to the bar ${name}`;
}

function notOldEnough(name){
    return `You are not old enough to enter the bar ${name}`;
}

function theBar(){
    let name = prompt("What's your name");
    let age = Number(prompt("What's your age"));
    let sex = prompt("What's your gender");

    if(age>AGE_MAX && sex.toLocaleLowerCase()==SEX){
        alert(welcome(name));
    }   else if(age<AGE_MAX){
        alert(notOldEnough(name));
    }   else{
        alert(notWelcome(name));
    }
}

//theBar();

/* SWITCH */

function flavourFound(flavour){
    return `Your flavour ${flavour} has been found `;
}

function flavourNotFound(flavour){
    return `Your flavour ${flavour} has not been found `;
}

function theIceCreamShop(){
    let flavour = prompt('Enter the flavour you want (strawberry, banana, melon, orange, kiwi').toLocaleLowerCase();

    switch(flavour){
        case 'strawberry':{
            alert(flavourFound(flavour));
            break;
        }
        case 'banana':{
            alert(flavourFound(flavour));
            break;
        }
        case 'melon':{
            alert(flavourFound(flavour));
            break;
        }
        case 'orange':{
            alert(flavourFound(flavour));
            break;
        }
        case 'kiwi':{
            alert(flavourFound(flavour));
            break;
        }
        default:{
            alert(flavourNotFound(flavour));
            break;
        }
    }

    alert('See you soon!')
}

//theIceCreamShop();


/* THROW - TRY CATCH FINALLY */

function sum(a,b){
    if(arguments.length>2){
        throw console.error('No soporta mas de 2 argumentos');
    }
    return a+b;
}

// sum(a,b,c);
// console.log('This is and error by THROW')

/* this function will only allow password longer than 7 */

function savePass(password){
    let message = '';
    try{
        if(password.length < 6) throw 'SHORT';
        if(password.length > 10) throw 'LONG'; 

        message = `The password ${password} allowed`;
    }   
        catch(err){
            if(err='SHORT'){
                message = `The password ${password} is too short`
            }
            if(err='LONG'){
                message = `The password ${password} is too long`
            }
    }
        finally{
            console.log('Passwords approved', message);
        }
}

savePass('12345');
savePass('123456');
savePass('1234567');
savePass('12345678');