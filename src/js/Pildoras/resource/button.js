export const componente = (config) => {
    const {
        cantidad = 1,
        elemento = 'button',
        clases = ["btn", "btn-primary"],
        contenido = "config",
        selector = 'config',
        url = 'https://manz.dev/assets/stickers/batmanz.gif',
        div,
    } = config

    for (let i = 1; i <= cantidad;i++) {
        let miElemento = document.createElement(elemento)
        clases.forEach(clase => miElemento.classList.add(clase))
        miElemento.textContent = `${contenido}${i}`
        miElemento.setAttribute("id", `${elemento}-${i}`)
        let select = document.querySelector(selector)
        if (div) {
            let elemtoDiv = document.createElement('div')
            div.forEach(clase => elemtoDiv.className = div)
            select.appendChild(elemtoDiv)
            elemtoDiv.appendChild(miElemento)
        } else {
            select.appendChild(miElemento)
        }
        if (elemento == 'img') miElemento.setAttribute("alt", `${elemento}-${i}`)
        if (elemento == 'img') miElemento.setAttribute("src", url)
    }

}