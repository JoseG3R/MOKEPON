//iniciarJuego
const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra');
const sectionReiniciar = document.getElementById('reiniciar');
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById('boton-reiniciar');
//seleccionarMascotaJugador
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');

const sapanMascotaJugador = document.getElementById('mascota-jugador');
//seleccionarMascotaEnemigo
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
//combate
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
//crearMensaje
const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');

const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const tarjetasAtaques = document.getElementById('tarjetas-ataques');

let mokepones = [];
let ataqueJugador;
let ataqueEnemigo;
let btnAtaques;
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let vidasEnemigo = 3;
let vidasJugador = 3;

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}
let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.webp',5);

let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.webp', 5);

let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.webp',5);

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
);
capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
);
ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
);

mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none';
    sectionReiniciar.style.display = 'none';
    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
            <input type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}> 
            </label>
        `;
        contenedorTarjetas.innerHTML += opcionDeMokepones;
        inputHipodoge = document.getElementById('Hipodoge');
        inputCapipepo = document.getElementById('Capipepo');
       inputRatigueya = document.getElementById('Ratigueya');
    });
 
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
    botonFuego.addEventListener('click',ataqueFuego);
    botonAgua.addEventListener('click',ataqueAgua);
    botonTierra.addEventListener('click',ataqueTierra);
    botonReiniciar.addEventListener('click',reiniciarJuego);
}
function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'flex';

    if (inputHipodoge.checked) {
        sapanMascotaJugador.innerText = inputHipodoge.id;
    }else if (inputCapipepo.checked) {
        sapanMascotaJugador.innerText = inputCapipepo.id;
    }else if (inputRatigueya.checked) {
        sapanMascotaJugador.innerText = inputRatigueya.id;
    }else{
        alert('Selecciona una mascota, por favor');
    }
    seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(0,mokepones.length - 1);

    spanMascotaEnemigo.innerHTML= mokepones[mascotaAleatorio].nombre;
}
function ataques() {
    mokepones.forEach((mokepon)=>{
        btnAtaques = `
            <button class="boton-de-ataque" id="boton-fuego">Fuego 🔥</button>
        `;
    })
}
function ataqueFuego() {
    ataqueJugador = 'FUEGO';
    ataqueAleatorioEnemigo();
}
function ataqueAgua() {
    ataqueJugador = 'AGUA';
    ataqueAleatorioEnemigo();
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA';
    ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3);
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO';
    }else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA';
    }else{
        ataqueEnemigo = 'TIERRA';
    }
    combate();
}
function combate() {
    if(ataqueJugador == ataqueEnemigo){
        crearMensaje('EMPATE');
    }else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje('GANASTE');
        vidasEnemigo--;
        spanVidasEnemigo.innerText = vidasEnemigo;
    }else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje('GANASTE');
        vidasEnemigo--;
        spanVidasEnemigo.innerText = vidasEnemigo;
    }else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje('GANASTE');
        vidasEnemigo--;
        spanVidasEnemigo.innerText = vidasEnemigo;
    }else{
        crearMensaje('PERDISTE');
        vidasJugador--;
        spanVidasJugador.innerText = vidasJugador;
    }
    revisarVidas();
}
function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('FELICITACIONES GANASTE!😎');
    }else if (vidasJugador == 0) {
        crearMensajeFinal('LO SIENTO PERDISTE! 😔');
    }
}
function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}
function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerText = resultadoFinal;

    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;
    
    sectionReiniciar.style.display = 'block';
}
function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function reiniciarJuego() {
    location.reload();
}
window.addEventListener('load', iniciarJuego);