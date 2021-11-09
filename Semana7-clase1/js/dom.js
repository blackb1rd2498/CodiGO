const h1 = document.querySelector('h1');

console.log('h1 %0', h1);

h1.textContent = 'TEXTO MODIFICADO DESDE JS';
h1.style.color = 'red';
h1.style.fontSize = '50px';
h1.style.background = 'lightblue';

h1.onclick = function(){
    this.style.fontSize = `${Number(this.style.fontSize.replace('px',''))+10}px`;
};

h1.onmouseenter = function () {
    console.log('entrar');
    this.style.backgroundColor = 'pink';
}

h1.onmouseout = function () {
    console.log('salir');
    this.style.backgroundColor = 'black';
}

function SubmitForm() {
    let form = document.querySelector('form');
    const inpName = document.querySelector('.js_name');
    const inpLastName = document.querySelector('.js_lastname');
    const inpPassword = document.querySelector('.js_password');

    form.onsubmit = function (event){
        event.preventDefault();
        console.log('nombre', inpName.value)
        console.log('apellido', inpLastName.value)
        console.log('clave', inpPassword.value)
    }
}

SubmitForm();