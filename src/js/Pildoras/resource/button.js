export const componente = (config) => {
    const {
        cantidad = 1,
        type = 'button',
        clases = ["btn", "btn-primary"],
        contenido = "config",
        selector = 'config',
        url ='https://manz.dev/assets/stickers/batmanz.gif'
    } = config;

    for (let i = 1; i <= cantidad;i++) {
        let miElemento = document.createElement(type);
        clases.forEach(clase => miElemento.classList.add(clase));
        miElemento.textContent = `${contenido}${i}`;
        miElemento.setAttribute("id", `${type}-${i}`);
        let select = document.querySelector(selector);
        select.appendChild(miElemento);
        if (type == 'img') miElemento.setAttribute("alt", `${type}-${i}`);
        if (type == 'img') miElemento.setAttribute("src", url);
    }

}