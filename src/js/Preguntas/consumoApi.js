const API_URL = 'https://jsonplaceholder.typicode.com'

// Obtener los datos de todos los usuarios y mostrarlos en la consola:

let getUsers = async () => {
    try {
        const response = await fetch(`${API_URL}/users`)
        const todos = await response.json()
        console.log(todos)
   } catch (error) {
        console.log(error)
   }
}
// Obtener los datos de un usuario en particular(por ejemplo, el usuario con ID 3) y mostrarlos en la consola:
let getUserById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/users/${id}`)
        if (!response.ok) throw new Error('Usuario no encontrado')
        const todos = await response.json()
        console.log(todos)
    } catch (error) {
        console.log(error)
    }
}
// getUserById(-1)
// Obtener los datos de todos los posts y mostrar solo el título y el cuerpo de cada uno:
let getPosts = async ()=>{
    try {
        const response = await fetch(`${API_URL}/posts`)
        if (!response.ok) throw new Error('URL no encontrada')
        const posts = await response.json()
        posts.forEach(({ title, body }) => {
            console.log(title)
            console.log(body)
        });
    } catch (error) {
        console.error(error)
    }
}
// getPosts()
// Obtener los datos de un post en particular(por ejemplo, el post con ID 3) y mostrarlos en la consola:
// ayudame con agregar un mensaje de tiempo de espera 
let getPostById = async (id) => { 
    try {
        const response = await fetch(`${API_URL}/posts/${id}`)
        if (!response.ok) throw new Error(`Usuario no encontrado ${id}`)
        const posts = await response.json()
        console.log(posts)
    } catch (error) {
        console.error(error)
    }
}
getPostById(2)
