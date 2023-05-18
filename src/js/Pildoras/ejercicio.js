// Crear el elemento div y su contenido utilizando una cadena de texto
// const containerString = '<div class="container" id="myContainer"><p>Hola mundo!</p></div>';

// // Insertar el elemento div en el DOM
// document.body.innerHTML = containerString;

// // Acceder al elemento div creado
const containerElement = document.querySelector('.container');

// Establecer un atributo en el elemento div creado
// containerElement.setAttribute('id', 'myContainer');

// Agregar un evento al elemento p dentro del div creado
const pElement = containerElement.querySelector('.elementos');
const li = document.createElement('li')
li.textContent = 'Hola mundo'

pElement.appendChild(li)
console.log(pElement)

pElement.addEventListener('click', function () {
    console.log('Se hizo clic en el elemento p!');
});
