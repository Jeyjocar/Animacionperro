let estado_personaje = "Inactivo";
const desplegable = document.getElementById("animaciones");
desplegable.addEventListener("change", function(e){
    estado_personaje=e.target.value});
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const ancho_canvas = canvas.width=600;
const alto_canvas = canvas.height=600;

const imagen_player = new Image();
imagen_player.src = "perro.png";
const ancho_sprite = 575;
const alto_sprite = 523;

let frame_juego = 0;
const velocidad_frame = 5;
const animacion_sprite = [];
const animacion_estado = [
    {
        nombre_estado:"Inactivo",
        frame: 7,
    },
    {
        nombre_estado:"Saltar",
        frame: 7,
    },
    {
        nombre_estado:"Caida",
        frame: 7,
    },
    {
        nombre_estado:"Correr",
        frame: 9,
    },
    {
        nombre_estado:"Mareado",
        frame: 11,
    },
    {
        nombre_estado:"Sentado",
        frame: 5,
    },
    {
        nombre_estado:"Rodar",
        frame: 7,
    },
    {
        nombre_estado:"Morder",
        frame: 7,
    },
    {
        nombre_estado:"Muerto",
        frame: 12,
    },
    {
        nombre_estado:"Golpeado",
        frame: 4,
    },
];

animacion_estado.forEach((estado, indice) =>{
    let frame = {
        localizacion: [],
    }
    for (let i = 0; i < estado.frame; i++) {
        let posicionX = i*ancho_sprite;
        let posicionY = indice*alto_sprite;
        frame.localizacion.push({x:posicionX, y:posicionY,});
    }
    animacion_sprite[estado.nombre_estado] = frame;
});

console.log(animacion_sprite);

function animar(){
    ctx.clearRect(0, 0, ancho_canvas, alto_canvas);
    let posicion = Math.floor(frame_juego/velocidad_frame)%animacion_sprite [estado_personaje].localizacion.length;
    let frameX = ancho_sprite*posicion;
    let frameY = animacion_sprite[estado_personaje].localizacion[posicion].y;
    ctx.drawImage(imagen_player, frameX, frameY,ancho_sprite, alto_sprite, 0,0,ancho_sprite,alto_sprite);
    frame_juego++;
    requestAnimationFrame(animar);
};
animar();
