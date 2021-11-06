let numbers = [0,1,2,3,4,5,6,7,8,9,10];
let names = ['fer','ole','mili','lopez','val'];
let flavours = ['lime', 'coffee', 'milk', 'orange'];
let arraysofArrys = [[1,3,2],[0,2,3.43],[9,8,7,6]];

console.log(numbers[0]);
console.log(names[1]);
console.log(flavours[3]);

console.log('arraysofArrys', arraysofArrys[1][2]);

console.log(numbers.length); //longitud de un array
console.log(numbers.push(11)); //agregar un elemento al array
console.log(numbers.unshift(11)); //agregar un elemento al inicio del array
console.log(numbers.pop()); //eliminar ultimo elemento del array
console.log(numbers.shift()); //eliminar el primer elemento de un array
console.log(numbers.splice(2,5));


/* OBJETOS */

let alumno = {
    nombre: 'sebastian',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    getName: function () {
      return this.nombre;
    },
    getFullName: function () {
      return `${this.nombre} ${this.lastname}`;
    },
  };
  
  console.log('alumno.nombre', alumno.nombre);
  console.log('alumno.nombre', alumno.lastname);
  console.log('alumno.nombre', alumno.getName());
  
  let profesor = {
    nombre: 'sebastian',
    lastname: 'yabiku',
    age: 35,
    grade: 5,
    sex: 'm',
    experience: [
      {
        college: 'santisima trinidad',
        age: 2022,
      },
      {
        college: 'recoleta',
        age: 2000,
      },
    ],
  };
  
  const alumnos = [
    {
      nombre: 'sebastian',
      lastname: 'yabiku',
      age: 35,
      grade: 5,
      sex: 'm',
      getName: function () {
        return this.nombre;
      },
      getFullName: function () {
        return `${this.nombre} ${this.lastname}`;
      },
    },
    {
      nombre: 'jose',
      lastname: 'yabiku',
      age: 35,
      grade: 5,
      sex: 'm',
      getName: function () {
        return this.nombre;
      },
      getFullName: function () {
        return `${this.nombre} ${this.lastname}`;
      },
    },
    {
      nombre: 'pedro',
      lastname: 'yabiku',
      age: 35,
      grade: 5,
      sex: 'm',
      getName: function () {
        return this.nombre;
      },
      getFullName: function () {
        return `${this.nombre} ${this.lastname}`;
      },
    },
    {
      nombre: 'hector',
      lastname: 'yabiku',
      age: 35,
      grade: 5,
      sex: 'm',
      getName: function () {
        return this.nombre;
      },
      getFullName: function () {
        return `${this.nombre} ${this.lastname}`;
      },
    },
  ];
  
  console.log('alumnos', alumnos);
  
  for (let index = 0; index < alumnos.length; index++) {
    console.log(alumnos[index]);
  }