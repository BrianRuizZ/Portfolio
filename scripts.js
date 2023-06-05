let mensaje = document.querySelector('.mensaje');
let mensajeVar = document.querySelector('.mensajeVar');
const burgerMenu = document.querySelector('.burger-m');

function contacto() {
    mensaje.classList.toggle('mensaje')
    mensaje.classList.toggle('mensaje-abierto')
}

// Copia mi gmail para pegarle en la papelera

function copy() {
    navigator.clipboard.writeText("ruizbrian121@gmail.com")
    mensajeVar.textContent = "Copiado en portapapeles! ";
    setTimeout(()=> {
        mensaje.classList.toggle('mensaje');
        mensaje.classList.toggle('mensaje-abierto');
        mensajeVar.textContent = "Contactame por mi gmail: ";
    },1000);
}


function menuActivo() {
    burgerMenu.classList.toggle('burger-activo')
}