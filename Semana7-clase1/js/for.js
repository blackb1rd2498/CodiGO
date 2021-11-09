const users = [
    {
        name :'fer',
        lastname : 'quispe',
        age : 23,
    },
    {
        name :'fern',
        lastname : 'quispe',
        age : 24,
    },
    {
        name :'ferna',
        lastname : 'quispe',
        age : 25,
    },
    {
        name :'fernan',
        lastname : 'quispe',
        age : 26,
    },
    {
        name :'fernand',
        lastname : 'quispe',
        age : 12,
    },
    {
        name :'fernando',
        lastname : 'quispe',
        age : 13,
    },
    {
        name :'fernando s',
        lastname : 'quispe',
        age : 15,
    },
    {
        name :'fernando su',
        lastname : 'quispe',
        age : 21,
    },
];

function esMayor21(edad){
    return edad>=21;
}

console.log('primer elemento de array', users[0].age, esMayor21(users[0].age));
console.log('segundp elemento de array', users[1].age, esMayor21(users[1].age));
console.log('terce elemento de array', users[2].age, esMayor21(users[2].age));

for (let index = 0; index < users.length; index++) {
    console.log(`index element ${index} ${esMayor21(users[index].age)}`);    
}

const number = [
    [0,1,2,3,4,5],
    [0,1,2,3,4,5,6,7],
];

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    for (let j = 0; j < number[i].length; j++) {
        console.log(`elementos del array`, number[i][j]);        
    }
}

//while
let n =  0;
while(n<3){
    n++;
    console.log('hasta que se cumpla la condicion while')
}

//do while
do{
    console.log('al menos una sola vez');
}while(false);

//break
for (let index = 0; index < 10; index++) {
    console.log('index', index);

    if(index>=4) break;
}

//continue
for (let index = 0; index < 10; index++) {
    if(index==4 || index ==5 || index==6)continue;
    console.log('continue',index);
}

//for in
const perro= {
    raza : 'husky',
    edad: 3,
    color:'blanco',
    altura: '80cm',
    pais: 'peru'
};

for (const key in perro){
    console.log('key', key);
    console.log('value', perro[key]);
}