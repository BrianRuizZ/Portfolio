let mensaje = document.querySelector('.mensaje');
let mensajeVar = document.querySelector('.mensajeVar');

// Variables para la traduccion de la pagina

let idioma = 'es';

let habilidadesH3 = document.getElementById('habilidades');
let proyectosH3 = document.getElementById('proyectosH3')

let botonVerPagina = document.getElementsByClassName('botonVerPagina');
let botonVerCodigo = document.getElementsByClassName('botonVerCodigo');

let liNavA = document.getElementById('li-nav-a');
let liNavB = document.getElementById('li-nav-b');
let liNavC = document.getElementById('li-nav-c');

let luBurgerA = document.getElementById('lu-burgerA');
let luBurgerB = document.getElementById('lu-burgerB');
let luBurgerC = document.getElementById('lu-burgerC');

// constantes

const burgerMenu = document.querySelector('.burger-m');

const saludo1 = document.getElementById('saludo1');
const saludo2 = document.getElementById('saludo2');
const saludo3 = document.getElementById('saludo3');
const saludo4 = document.getElementById('saludo4');
const saludo5 = document.getElementById('saludo5');

function contacto() {

    mensaje.classList.toggle('mensaje')
    mensaje.classList.toggle('mensaje-abierto')
    burgerMenu.classList.remove('burger-activo')
}

function cerrar() {
    mensaje.classList.toggle('mensaje')
    mensaje.classList.toggle('mensaje-abierto')
}

// Copia mi gmail para pegarle en la papelera

function copy() {
    navigator.clipboard.writeText("ruizbrian121@gmail.com")

    if (idioma == 'es') {
        mensajeVar.textContent = "Copiado en portapapeles! ";
    }
    else if (idioma == 'en') {
        mensajeVar.textContent = "Copied to the clipboard! ";
    }

    setTimeout(()=> {
        mensaje.classList.toggle('mensaje');
        mensaje.classList.toggle('mensaje-abierto');
        if (idioma == 'es') {
            mensajeVar.textContent = "Contactame via gmail: ";
        }
        else if (idioma == 'en') {
            mensajeVar.textContent = "Contact me via gmail: ";
        }
    },500);
}


function menuActivo() {
    burgerMenu.classList.toggle('burger-activo')
}

// Funcion para cambiar de idioma

function cambiarIdioma() {

    // Traduccion al Ingles

    if (saludo1.textContent == 'Bienvenido, soy ') {
            for (let i = 0; i < botonVerCodigo.length; i++) {
                botonVerCodigo[i].textContent = 'View code';
                botonVerPagina[i].textContent = 'View page';
            }
            idioma = 'en';
            luBurgerA.textContent = 'PROJECTS';
            luBurgerB.textContent = 'TECHNOLOGIES';
            luBurgerC.textContent = 'CONTACT ME';
            liNavA.textContent = 'Projects';
            liNavC.textContent = 'Technologies';
            liNavB.textContent = 'Contact me';
            saludo1.textContent = "Hi! i'm ";
            saludo2.textContent = ',a ';
            saludo3.textContent = 'web developer';
            saludo4.textContent = ' and former student of ';
            saludo5.textContent = 'Systems Analysis';
            habilidadesH3.textContent = 'Technologies';
            proyectosH3.textContent = 'My Projects';
            mensajeVar.textContent = "Contact me via gmail: ";
            return;
    }

    // Traduccion al Español

    if (saludo1.textContent == "Hi! i'm " ) {
        for (let i = 0; i < botonVerCodigo.length; i++) {
            botonVerCodigo[i].textContent = 'Ver codigo';
            botonVerPagina[i].textContent = 'Ver pagina';
        }
            idioma = 'es';
            luBurgerA.textContent = 'PROYECTOS';
            luBurgerB.textContent = 'TECNOLOGIAS';
            luBurgerC.textContent = 'CONTACTO';
            liNavA.textContent = 'Proyectos';
            liNavC.textContent = 'Tecnologias';
            liNavB.textContent = 'Contactame';
            saludo1.textContent = "Bienvenido, soy ";
            saludo2.textContent = ',un ';
            saludo3.textContent = 'desarrollador web';
            saludo4.textContent = ' y ex estudiante de ';
            saludo5.textContent = 'Analista en Sistemas';
            habilidadesH3.textContent = 'Tecnologias';
            proyectosH3.textContent = 'Mis Proyectos';
            mensajeVar.textContent = "Contactame via gmail: ";
            return;
        }
}
