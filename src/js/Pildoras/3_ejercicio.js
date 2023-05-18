// (() => {
//     const inicio = `
//     <div class="row justify-content-center">
//         <div class="col-auto">
//             <input type="text" id="input-1" class="form-control" value="sss">
//         </div>
//         <div class="col-auto">
//             <button class="btn btn-primary" id="button-1"> Buton</button>
//         </div>
//         <div class="col-12 mt-3">
//             <h5 id="mensaje"></h5>
//         </div>
//     </div>`;
//     document.querySelector('#botones').insertAdjacentHTML('beforeend',inicio)
// })()
window.onload = inicio
function inicio() {
    document.querySelector('#botones').insertAdjacentHTML('beforeend', `
      <div class="row justify-content-center">
        <div class="col-auto">
            <input type="text" id="input-1" class="form-control" value="sss">
        </div>
        <div class="col-auto">
            <button class="btn btn-primary" id="button-1"> Buton</button>
        </div>
    </div>
    <div class="row justify-content-center ">
        <div class="col-6 mt-3">
            <h1 id="mensaje"></h1>
        </div>
        <div class="col-6 mt-3" id='mensaje1'>
            <h1 id="mensaje"></h1>
        </div>
    </div>
    
     `)
    document.querySelector('#button-1').addEventListener('click', leer)
}


let leer = () => {
    let nombre = 'jose'
    let control = document.querySelector('#input-1')
    if (control.value.toLowerCase() === nombre) {
        document.getElementById('mensaje1').innerHTML = `<button class="btn btn-primary" id="button-2"> Buton</button>`
        document.querySelector('#button-2').onclick = abrir
        return document.getElementById('mensaje').textContent = `Hola ${nombre.substring(0, 1).toUpperCase()}${nombre.slice(1)}`;
    }
    control.value = '';
    document.getElementById('mensaje').textContent = '';
    control.focus();
}

let abrir = () => {
    //abrir un navegador
    window.open('https://www.google.com/', '_blank')
    // evento teclado para nombre
    let nombre = document.querySelector('#input-1')
    
}