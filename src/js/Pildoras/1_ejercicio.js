import { componente } from "./Tareas/t1";
let lienzo = document.querySelector('#lienzo');

componente({
    cantidad: 4,
    type: 'button',
    clases: ["btn", "btn-primary", 'me-2'],
    contenido: "buton",
    selector: '#botones'
})
const clearLienzo = () => lienzo.innerHTML = ''

document.getElementById('button-1').addEventListener('click', () => {
    clearLienzo()
    componente({
        cantidad: 1,
        type: 'h1',
        clases: [],
        contenido: "Hola",
        selector: '#lienzo'
    })
    console.log('click')
})
document.getElementById('button-2').addEventListener('click', () => {
    clearLienzo()
    componente({
        cantidad: 1,
        type: 'img',
        clases: ['img-thumbnail'],
        contenido: "Hola",
        selector: '#lienzo'
    })
    console.log('click')
})
document.getElementById('button-3').addEventListener('click', () => {
    componente({
        cantidad: 1,
        type: 'button',
        clases: ["btn", "btn-primary", 'm-2'],
        contenido: "btn",
        selector: '#lienzo'
    })
})
document.getElementById('button-4').addEventListener('click', () => {
    clearLienzo();
})



