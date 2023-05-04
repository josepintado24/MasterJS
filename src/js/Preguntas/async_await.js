// Crear una promesa que resuelva con un mensaje de éxito después de 2 segundos y rechace con un mensaje de error después de 3 segundos.
const mensaje = () => {
    const numAleatorio = Math.floor(Math.random() * 10000)
    return new Promise((resolve, reject) => {
        console.log(numAleatorio)
        setTimeout(() => {
            (numAleatorio <= 3000) ? resolve("Acceso") : reject(new Error('Exediste'));
        }, numAleatorio);

    })
}
// mensaje()
//     .then(console.log)
//     .catch(console.error)
const mensajeAsync = async () => {
    try {
        let obj = await mensaje(0)
        console.log(obj)
    } catch (error) {
        console.error(error)
    }
}
// mensajeAsync()
// Crear una función que reciba un número como parámetro y retorne una promesa que resuelva con el número multiplicado por 2 después de 2 segundos.
const multiplicar = (numero) => {
    const numeroMultiplicado = numero * 2
    return new Promise((resolve, reject) => {
        console.log(numeroMultiplicado)
        setTimeout(() => {
            resolve(`Numero multiplicado por 2 es: ${numero * 2}, despues de 2 seg`)
        }, 2000)
    })
}
// multiplicar(2).then(console.log)

// Crear una función que reciba un arreglo de números como parámetro y retorne una promesa que resuelva con la suma de los números del arreglo después de 2 segundos.
const sumar = (numeros) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const suma = numeros.reduce((total, numero) => {
                if (typeof numero !== 'number') return reject(`Incorrecto ${numero}`)
                return total + numero
            }, 0)
            resolve(`la suma es: ${suma}`)
        }, 2000)
    })



}
function sumarNumeros(arrayDeNumeros) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let suma = 0;
            for (let i = 0; i < arrayDeNumeros.length; i++) {
                if (typeof arrayDeNumeros[i] !== 'number') {
                    reject('El elemento en el índice ' + i + ' no es numérico');
                    return;
                }
                suma += arrayDeNumeros[i];
            }
            resolve(suma);
        }, 2000);
    });
}
(async () => {
    try {
        let suma = await sumarNumeros([1, 4, 2, '3'])
        console.log(suma)
    } catch (error) {
        console.error(error)
    }
})()
// sumar([0,1,2,3,4,5]).then(console.log).catch(console.log)

// Crear una función que reciba dos números como parámetros y retorne una promesa que resuelva con la división del primer número por el segundo después de 2 segundos.Si el segundo número es cero, la promesa debe rechazar con un mensaje de error después de 2 segundos.
const multiplicarNumero = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return (num2 <= 0) ? reject('El numero es menor a 0') : resolve(`la división es:${num1 / num2}`)
        }, 2000)
    })
}
// multiplicarNumero(1,0).then(console.log).catch(console.log)
// Crear una función que reciba un arreglo de números como parámetro y retorne una promesa que resuelva con un nuevo arreglo que contenga los números del arreglo original ordenados de forma ascendente después de 2 segundos.
const asendenteNumero = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(numero.sort());
        }, 2000)
    })
}
// asendenteNumero([1,4,2,3]).then(console.log)
// Crear una función que reciba una cadena como parámetro y retorne una promesa que resuelva con la cadena en mayúsculas después de 2 segundos.
const mayusculas = (cadena) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(cadena.toUpperCase());
        }, 2000)
    })
}
// mayusculas('hola').then(console.log)