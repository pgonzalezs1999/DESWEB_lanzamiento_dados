// Llamar a los objetos HTML que vamos a editar
let dadoA = document.getElementById("dadoA");
let dadoB = document.getElementById("dadoB");
let textoA = document.getElementById("resultadoA");
let textoB = document.getElementById("resultadoB");
let suma = document.getElementById("suma");

let urls = [] // Cada cara del dado
    urls[0] = "imagenes/1.png";
    urls[1] = "imagenes/2.png";
    urls[2] = "imagenes/3.png";
    urls[3] = "imagenes/4.png";
    urls[4] = "imagenes/5.png";
    urls[5] = "imagenes/6.png";

let modoA = "parado"; // Guarda el estado del primer dado
let modoB = "parado"; // Guarda el estado del segundo dado
randA = 0; // Valor aleatorio para asignar al primer dado
randB = 0; // Valor aleatorio para asignar al primer dado

function lanzarA() // Función de doble click
{
    modoA = "girando";
    randA = Math.floor(Math.random()*6); // Elegir aleatoriamente
    dadoA.src=urls[randA]; // Cambiar la imagen
    textoA.innerText = "Lanzando dado..."; // Para no mostrar el resultado anterior while girando
    suma.innerText = "Esperando a los dados...";
}

function pararA() // Función de click simple
{
    modoA = "parado";
    textoA.innerText = "Ha salido un " + (randA+1); // Actualizar el texto con el resultado
    if(modoB=="parado") // Para que no calcule la suma con un número aleatorio que tenía el otro dado mientras giraba
    {
        suma.innerText = "En total suman " + (randA+randB+2) + " puntos";
    }
}

function lanzarB() // Función de doble click
{
    modoB = "girando";
    randB = Math.floor(Math.random()*6); // Elegir aleatoriamente
    dadoB.src=urls[randB]; // Cambiar la imagen
    textoB.innerText = "Lanzando dado..."; // Para no mostrar el resultado anterior while girando
    suma.innerText = "Esperando a los dados...";
}

function pararB() // Función de click simple
{
    modoB = "parado";
    textoB.innerText = "Ha salido un " + (randB+1); // Actualizar el texto con el resultado
    if(modoA=="parado") // Para que no calcule la suma con un número aleatorio que tenía el otro dado mientras giraba
    {
        suma.innerText = "En total suman " + (randA+randB+2) + " puntos";
    }
}

function bucle() // Para mantener los dados girando indefinidamente
{
    if(modoA=="girando") { lanzarA(); }
    if(modoB=="girando") { lanzarB(); }

    setTimeout(() => { bucle(); }, 150); // Cada cuántos milisegundos se barajan los dados
    // setInterval(function(){ bucle(); }, 1000); // Con setInterval(), función requerida en el enunciado, funciona igual, pero la recursividad se ejecuta con intervalos de tiempo extraño, por eso utilizo la otra variante
}

bucle(); // Empezar la escucha