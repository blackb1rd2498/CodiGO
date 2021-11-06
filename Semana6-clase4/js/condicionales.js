//use alt+96 to create `` and you can use them to add variable into returns

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

theIceCreamShop();

