//iniciarJuego

const sectionReiniciar = document.getElementById('reiniciar');
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById('boton-reiniciar');
//seleccionarMascotaJugador
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');

const spanMascotaJugador = document.getElementById('mascota-jugador');
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
const contenedorAtaques = document.getElementById('contenedorAtaques');

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let btnAtaques;
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaJugador;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
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

let langostelvis = new Mokepon('Langostelvis','./assets/mokepons_mokepon_langostelvis_attack.png',5);
let pydos = new Mokepon('Pydos','./assets/mokepons_mokepon_pydos_attack.png',5);
let tucalpalma = new Mokepon('Tucalpalma','./assets/mokepons_mokepon_tucapalma_attack.png',5);

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

langostelvis.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
);
pydos.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
);
tucalpalma.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
);

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis , pydos, tucalpalma );

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
        inputLangostelvis = document.getElementById('Langostelvis');
        inputPydos = document.getElementById('Pydos');
        inputTucalpalma = document.getElementById('Tucalpalma');

    });
 

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    botonReiniciar.addEventListener('click',reiniciarJuego);
}
function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'flex';

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerText = inputHipodoge.id;
        mascotaJugador = inputHipodoge.id;
    }else if (inputCapipepo.checked) {
        spanMascotaJugador.innerText = inputCapipepo.id;
        mascotaJugador = inputCapipepo.id;
    }else if (inputRatigueya.checked) {
        spanMascotaJugador.innerText = inputRatigueya.id;
        mascotaJugador = inputRatigueya.id;
    }else if (inputLangostelvis.checked) {
        console.log(inputLangostelvis);
        spanMascotaJugador.innerText = inputLangostelvis.id;
        mascotaJugador = inputLangostelvis.id
    }else if (inputPydos.checked) {
        spanMascotaJugador.innerText = inputPydos.id;
        mascotaJugador = inputPydos.id   
    }else if (inputTucalpalma.checked) {
        spanMascotaJugador.innerText = inputTucalpalma.id;
        mascotaJugador = inputTucalpalma.id   
    }
    else{
        alert('Selecciona una mascota, por favor');
    }
    extraerAtaques(mascotaJugador);
    seleccionarMascotaEnemigo();
}
function extraerAtaques(mascotaJugador) {
    let ataques;
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques;
        }        
    }
    mostrarAtaques(ataques);
}
function mostrarAtaques(ataques) {
    ataques.forEach(ataque => {
        ataquesMokepon = `
        <button class="boton-de-ataque BAtaque" id="${ataque.id}">${ataque.nombre}</button>
        `;
        contenedorAtaques.innerHTML += ataquesMokepon;
    });
    botonFuego = document.getElementById('boton-fuego');
    botonAgua = document.getElementById('boton-agua');
    botonTierra = document.getElementById('boton-tierra');
    botones = document.querySelectorAll('.BAtaque');

}
function secuenciaAtaque() {
    botones.forEach((boton)=>{
        boton.addEventListener('click',(e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO');
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            }else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA');
                console.log(ataqueJugador);
                boton.style.background = '#112f58'; 
                boton.disabled = true;
            }else{
                ataqueJugador.push('TIERRA');
                console.log(ataqueJugador);
                boton.style.background = '#112f58'; 
                boton.disabled = true;
            }
            ataqueAleatorioEnemigo();

        })
    })
}
function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(0,mokepones.length - 1);
    spanMascotaEnemigo.innerHTML= mokepones[mascotaAleatorio].nombre;
    ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques;
    secuenciaAtaque();
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length - 1);
    
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO');
    }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA');
    }else{
        ataqueEnemigo.push('TIERRA');
    }
    console.log(ataqueEnemigo);
    iniciarPelea();
}
function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate();
    }
}
function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}
function combate() {
    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            indexAmbosOponentes(i,i);
            crearMensaje('EMPATE');
        }else if (ataqueJugador[i] === 'FUEGO' && ataqueEnemigo[i] == 'TIERRA' ) {
            indexAmbosOponentes(i,i);
            crearMensaje('GANASTE');
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        }else if (ataqueJugador[i] == 'AGUA' && ataqueEnemigo[i] == 'FUEGO') {
            indexAmbosOponentes(i,i);
            crearMensaje('GANASTE');   
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
            console.log(victoriasJugador);
        }else if (ataqueJugador[i] == 'TIERRA' && ataqueEnemigo[i] == 'AGUA') {
            indexAmbosOponentes(i,i);
            crearMensaje('GANASTE');   
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        }else{
            indexAmbosOponentes(i,i);
            crearMensaje('PERDISTE');
            victoriasEnemigo++;
            //console.log(victoriasEnemigo);
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }
    }
    revisarVidas();
}
function revisarVidas() {
    if (victoriasEnemigo == victoriasJugador) {
        crearMensajeFinal('FUE UN EMPATE!😎');
    }else if (vidasJugador < victoriasEnemigo) {
        crearMensajeFinal('LO SIENTO PERDISTE! 😔');
    }else{
        crearMensaje('FELICITACIONES GANASTE! 😎')
    }
}
function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}
function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerText = resultadoFinal;
    
    sectionReiniciar.style.display = 'block';
}
function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function reiniciarJuego() {
    location.reload();
}
window.addEventListener('load', iniciarJuego);