/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "obito",
        imagen: "./imagenes/obigod.jpg",
        descripcion: "top 1",
    },
    {
        id: 2,
        nombre: "pain",
        imagen: "./imagenes/pain.jpg",
        descripcion: "top 2",
    },
    {
        id: 3,
        nombre: "itachi",
        imagen: "./imagenes/itachigod.jpg",
        descripcion: "top 3",
    },
    {
        id: 4,
        nombre: "deidara",
        imagen: "./imagenes/deidara.jpeg",
        descripcion: "top 4",
    },
    {
        id: 5,
        nombre: "kisame",
        imagen: "./imagenes/kisame.jpg",
        descripcion: "top 5",
    },
    {
        id: 6,
        nombre: "konan",
        imagen: "./imagenes/konan.jpg",
        descripcion: "top 6",
    },
    {
        id: 7,
        nombre: "sasori",
        imagen: "./imagenes/sasori.jpg",
        descripcion: "top 7",

    },
   {
        id: 8,
        nombre: "zetsu",
        imagen: "./imagenes/zetsu.jpg",
        descripcion: "top 8",
    },
    {
        id: 9,
        nombre: "kakuzu",
        imagen: "./imagenes/kakuzu.jpg",
        descripcion: "top 9",
    },
    {
        id: 10,
        nombre: "hidan",
        imagen: "./imagenes/hidan.jpeg",
        descripcion: "top 10",
    },
    {
        id: 11,
        nombre: "orochimaru",
        imagen: "./imagenes/orochimaru.jpg",
        descripcion: "top 11",
    },
]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")



/* Función que recorre el listado de las cartas */
function recorrerCartas() {
    contenedorCartas.innerHTML = ""
    listadoCartas.forEach(
        (carta) => contenedorCartas.innerHTML += ` <article class="card">
        <img src="${carta.imagen}" alt="Imagen del proyecto">
        <div class="info">
          <h2>${carta.nombre}</h2>
          <p>${carta.descripcion}</p>
        </div>
    </article>`
    )
}

function  agregarcarta() {
       const nombre = prompt("nombre")
       const imagen = prompt("imagen")
       const descripcion = prompt("descripcion")

       const carta = {nombre,imagen,descripcion}
       listadoCartas.push(carta)
       recorrerCartas()
}

recorrerCartas()