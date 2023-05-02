(() => {
    let cuadrado = (value, fn) => {
        setTimeout(() => {
            fn(value,value*value)
        }, 0 | Math.random() * 1000)
    }
    cuadrado(1, (value, result) => {
        console.log('Datos')
        console.log(`Val: ${value} - result ${result}`)
        cuadrado(2, (value, result) => {
            console.log(`Val: ${value} - result ${result}`)
            cuadrado(3, (value, result) => {
                console.log(`Val: ${value} - result ${result}`)
                cuadrado(4, (value, result) => {
                    console.log(`Val: ${value} - result ${result}`)
                })
            })
        })
    })
})()