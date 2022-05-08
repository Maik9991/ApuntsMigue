let comentario = document.createComment("Comentario de prueba")

//¿Cómo agregar el comentario dentro de la etiqueta body?
//el body ya vienen cargada en el document, igual que el head y el title

//El método prepend me va a incluir el elemento dentro del body al principio
document.body.prepend(comentario)


pComment = document.getElementById('contenido')
pComment.append(comentario)
//append lo hará al final

let h1 = document.createElement ('h1')

h1.textContent = "Esto es un h1"

document.body.prepend(h1)

h1.innerHTML = "Esto es un h1 <span> con un span </span>"

let texto = document.createTextNode('Titulo h1')
h1.append(texto)

console.log(h1.isConnected)

let ul = document.querySelector("#tareas")
let copiaUl = ul.cloneNode(true);

document.body.prepend(copiaUl)

let navegadores = [
    'Explorer',
    'Safari',
    'Opera',
    'Firefox',
    'Chrome',
    'Ecosia'
]

let listaNavegadores = document.querySelector("#lista")

navegadores.forEach(navegador=>{
    let li = document.createElement('li')
    li.textContent= navegador;
    listaNavegadores.append(li)
})