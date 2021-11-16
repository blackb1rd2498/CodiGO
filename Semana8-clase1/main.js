//STRIN

const cadena= '              sebastian               '

console.log('longitud', cadena.length);
console.log('concat',cadena.concat('yabiku'));
console.log('includes',cadena.includes('sebasatian'));





//array metodos

const alumnos = [
    {
    name: 'sebastian',
    age:32,
    sex:m,
    },
    {
    name: 'fer',
    age:23,
    sex:m,
    },
    {
    name: 'ole',
    age:24,
    sex:f,
    },
    {
    name: 'jean',
    age:35,
    sex:f,
    },
];

const alumnosFullData = alumnos.map((alumno)=>{
    return{
        ...alumno,
        grade:'S',
        school:'san jose de monterrico',
    };
})

console.log('alumnos', alumnos);
console.log('alumnosFullData',alumnosFullData);
