import { componente } from "./resource/button";
componente({
    cantidad: 3,
    type: 'button',
    clases: ["btn", "btn-primary", 'me-2'],
    contenido: "buton",
    selector: '#botones'
})
componente({
    cantidad: 1,
    type: 'img',
    clases: ['img-fluid', 'img-thumbnail','w-25'],
    contenido: "img",
    selector: '#lienzo'
})
const button1 = document.getElementById('button-1')
const button2 = document.getElementById('button-2')
const button3 = document.getElementById('button-3')
const img = document.getElementById('img-1')
button1.addEventListener('click', () => {
    button1.classList.add('d-none')
    img.classList.remove('w-25')
})
button2.addEventListener('click', () => {
    img.classList.toggle('d-none')
})
button3.addEventListener('click', () => {
    button1.classList.remove('d-none')
    img.classList.add('w-25')
    img.classList.remove('d-none')
})
