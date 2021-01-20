//Menú responsive.
const btnMenuOpen = document.getElementById('btnMenuOpen'),
      btnMenuClose = document.getElementById('btnMenuClose'),
      menuBar = document.getElementById('menuBar'),
      enlaces = document.getElementById('enlaces');


//Click abrir
btnMenuOpen.addEventListener('click',() => {
    menuBar.classList.add('active');
});

//Click cerrar
btnMenuClose.addEventListener('click', () => {
    menuBar.classList.remove('active');
});

//Click cerrar con elementos de enlace
enlaces.addEventListener('click',() => {
    menuBar.style.transitionDelay = '0.5s'
    menuBar.classList.remove('active');
});

//Slider de productos.
const contenedor = document.querySelector('.slider'),
      btnIzq = document.getElementById('btn-izq'),
      btnDer = document.getElementById('btn-der');

//Evento para botón derecho.
btnDer.addEventListener('click', () => {
        contenedor.scrollLeft += contenedor.offsetWidth;
});

//Evento para botón izquierdo.
btnIzq.addEventListener('click',() => {
    contenedor.scrollLeft -= contenedor.offsetWidth;
})

//Validación de formulario.
const formulario = document.getElementById('formulario');

const validar = (e) => {
    const inputNombre = document.getElementById('nombre'), 
          inputEmail = document.getElementById('email'),
          inputComments = document.getElementById('comentarios'),
          alertSuccess = document.getElementById('alertSuccess'),
          alertError = document.getElementById('alertError');

    if(inputNombre.value == 0 || inputEmail.value == 0 || inputComments.value == 0){
        e.preventDefault();
        alertError.classList.remove('hide');
        alertError.classList.add('show');
        setTimeout(() => {
            alertError.classList.remove('show');
            alertError.classList.add('hide');
        },2000);
        
    } else {
        e.preventDefault();
        alertSuccess.classList.remove('hide');
        alertSuccess.classList.add('show');
        setTimeout(() => {
            alertSuccess.classList.remove('show');
            alertSuccess.classList.add('hide');
        },2000);
        inputNombre.value = '';
        inputEmail.value = '';
        inputComments.value = '';
    }

}

//Eventos del formulario.
formulario.addEventListener('submit',validar);

//Botón scroll top
const btnTop = document.getElementById('btn-top');

//Detectar scroll
window.addEventListener('scroll', () =>{
    let scroll = document.documentElement.scrollTop,
        fullSize = document.documentElement.offsetHeight,
        sizeVP = document.documentElement.clientHeight;

    if(scroll > 100){
        btnTop.classList.add('show');
    } else {
        btnTop.classList.remove('show');
    }

    if(fullSize === (scroll + sizeVP)){
        btnTop.classList.add('scrollfinal');
    } else{
        btnTop.classList.remove('scrollfinal');
    }
})

//Evento click en botón top.
btnTop.addEventListener('click',() =>{
    window.scrollTo(0,0);
})

//Evento click en logo.
const logo = document.getElementById('logo');
logo.addEventListener('click',() =>{
    window.scrollTo(0,0);
})