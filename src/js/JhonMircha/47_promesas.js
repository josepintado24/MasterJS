(() => {
    let cuadrado = (value) => {
        if (typeof value !== 'number') return Promise.reject(`Incorrecto ${value}`)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    value,
                    result:value*value
                })
                
            }, 0 | Math.random() * 1000)
        })

    }
    cuadrado(10)
        .then(({result:a}) => {
            console.log(a)
            return cuadrado("20")
        })
        .then(({ result: a }) => {
            console.log(a)
        })
        .catch()
    
})()