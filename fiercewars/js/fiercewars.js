const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-seleccionarmascota")
const botonReiniciar = document.getElementById("boton-reiniciar")
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const contenedorSelectores = document.getElementById("contenedor-selectores")
const pNombreMascotaJugador = document.getElementById("nombremascotajugador")
const pNombreMascotaEnemigo = document.getElementById("nombremascotaenemigo")
const pResultado = document.getElementById("resultado")
const divAtaques = document.getElementById("contenedor-ataques")
const ataqueJugador = document.getElementById("ataque-jugador")
const ataqueEnemigo = document.getElementById("ataque-enemigo")
const pVictoriasMascotaJugador = document.getElementById("victoriasmascotajugador")
const pVictoriasMascotaEnemigo = document.getElementById("victoriasmascotaenemigo")

let mascotas = []
let opcionesMascotas
let inputC  
let inputP
let inputW
let ataquesMascotas 
let jugadorAtaques = []
let enemigoAtaques = []
let ataquesMascotaEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let mascotaJugador
let victoriasJugador = 0
let victoriasEnemigo = 0

class Mascota {
    constructor(nombre, imagen, vida) {
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []
    }
}

let cubisaurio = new Mascota('Cubisaurio', './assets/mokepons_mokepon_ratigueya_attack.png', 3)
let penisaurio = new Mascota('Penisaurio', './assets/mokepons_mokepon_capipepo_attack.png', 3)
let wilsonsaurio = new Mascota('Wilsonsaurio', './assets/mokepons_mokepon_hipodoge_attack.png', 3)

cubisaurio.ataques.push(
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Tierra 🌱', id: 'boton-tierra'},
)

penisaurio.ataques.push(
    {nombre: 'Tierra 🌱', id: 'boton-tierra'},
    {nombre: 'Tierra 🌱', id: 'boton-tierra'},
    {nombre: 'Tierra 🌱', id: 'boton-tierra'},
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
)

wilsonsaurio.ataques.push(
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Fuego 🔥', id: 'boton-fuego'},
    {nombre: 'Agua 💧', id: 'boton-agua'},
    {nombre: 'Tierra 🌱', id: 'boton-tierra'},
)

mascotas.push(cubisaurio, penisaurio, wilsonsaurio)

function reiniciarJuego() {
    location.reload()
}

function iniciarJuego() {   
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    mascotas.forEach((mascota) => {
        opcionesMascotas = `
        <input type="radio" name="mascota" id=${mascota.nombre} />
        <label for=${mascota.nombre} class="selector-mascota">
            <p>${mascota.nombre}</p>
            <img src=${mascota.imagen} alt=${mascota.nombre}>
        </label>
        `
    contenedorSelectores.innerHTML += opcionesMascotas
    
    inputC = document.getElementById("Cubisaurio")
    inputP = document.getElementById("Penisaurio")
    inputW = document.getElementById("Wilsonsaurio")
    })
    
    botonMascotaJugador.addEventListener('click', selccionarMascotaJugador)
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function selccionarMascotaJugador() {   
    sectionSeleccionarMascota.style.display = 'none'
    
    sectionSeleccionarAtaque.style.display = 'flex'
    
    if(inputC.checked) {
        pNombreMascotaJugador.innerHTML = inputC.id
        mascotaJugador = inputC.id
    } else if(inputP.checked) {
        pNombreMascotaJugador.innerHTML = inputP.id
        mascotaJugador = inputP.id
    } else if(inputW.checked) {
        pNombreMascotaJugador.innerHTML = inputW.id
        mascotaJugador = inputW.id
    } else {
        alert("No haz elegido a tu mascota.\nDebes elegir a una.")
        location.reload()
    }
    
    extraerAtaques(mascotaJugador)

    selccionarMascotaEnemigo()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function selccionarMascotaEnemigo() {
    let mascAleatoria = aleatorio(0, mascotas.length - 1)

    pNombreMascotaEnemigo.innerHTML = mascotas[mascAleatoria].nombre

    ataquesMascotaEnemigo = mascotas[mascAleatoria].ataques

    secuenciaAtaque()
}

function extraerAtaques(mascotaJugador) {
    let extraido
    for (let i = 0; i < mascotas.length; i++) {
        if (mascotaJugador == mascotas[i].nombre) {
            extraido = mascotas[i].ataques
        } 
    }
    
    mostrarAtaques(extraido)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMascotas = `
        <button id=${ataque.id} class="boton-ataque bAtaque">${ataque.nombre}</button>
        `
        divAtaques.innerHTML += ataquesMascotas
    })
    
    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botones = document.querySelectorAll(".bAtaque")
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent == 'Fuego 🔥') {
                jugadorAtaques.push('FUEGO')
                boton.style.background = "#112F58"
                boton.disabled = true  
            } else if (e.target.textContent == 'Agua 💧') {
                jugadorAtaques.push('AGUA')
                boton.style.background = "#112F58"
                boton.disabled = true 
            } else if (e.target.textContent == 'Tierra 🌱') {
                jugadorAtaques.push('TIERRA')
                boton.style.background = "#112F58"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMascotaEnemigo.length - 1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        enemigoAtaques.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        enemigoAtaques.push('AGUA')
    } else {
        enemigoAtaques.push('TIERRA')
    }
    iniciarCombate()
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = jugadorAtaques[jugador]
    indexAtaqueEnemigo = enemigoAtaques[enemigo]
}

function combate() {
    for (let index = 0; index < jugadorAtaques.length; index++) {
        if (jugadorAtaques[index] == enemigoAtaques[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje()
        } else if (jugadorAtaques[index] == 'FUEGO' && enemigoAtaques[index] == 'TIERRA') {
            indexAmbosOponentes(index, index)
            crearMensaje()
            victoriasJugador++ 
            pVictoriasMascotaJugador.innerHTML = victoriasJugador
        } else if (jugadorAtaques[index] == 'TIERRA' && enemigoAtaques[index] == 'AGUA') {
            indexAmbosOponentes(index, index)
            crearMensaje()
            victoriasJugador++ 
            pVictoriasMascotaJugador.innerHTML = victoriasJugador
        } else if (jugadorAtaques[index] == 'AGUA' && enemigoAtaques[index] == 'FUEGO') {
            indexAmbosOponentes(index, index)
            crearMensaje()
            victoriasJugador++ 
            pVictoriasMascotaJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje()
            victoriasEnemigo++
            pVictoriasMascotaEnemigo.innerHTML = victoriasEnemigo
        }
    }
    
    revisarVictorias()
}

function iniciarCombate() {
    if (jugadorAtaques.length == 5) {
        combate()
    }
}

function revisarVictorias() {
    if (victoriasJugador == victoriasEnemigo) {
        mensajeFinal("¡FUE UN EMPATE! 🫤")
    } else if (victoriasJugador > victoriasEnemigo) {
        mensajeFinal("¡HAZ GANADO! 😄")
    } else if (victoriasEnemigo > victoriasJugador) {
        mensajeFinal("¡HAZ PERDIDO! 😭")
    }
}

function crearMensaje() {   
    let nuevoAtaqueJugador = document.createElement('p')
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador

    let nuevoAtaqueEnemigo = document.createElement('p')
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

    ataqueJugador.appendChild(nuevoAtaqueJugador)
    ataqueEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function mensajeFinal(resultadoFin) { 
    pResultado.innerHTML = resultadoFin  
    sectionReiniciar.style.display = 'block'
}

window.addEventListener('load', iniciarJuego)