// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    const ingresarAmigo = document.getElementById('amigo');
    const nombre = ingresarAmigo.ariaValueMax.trim();


    //validar campos no vacios
    if(nombre == ""){
        alert("por favor inserte un nombre ")
        return;
    }

    //validar que el nombre no es duplicado
    if(amigos.includes(nombre)){
        alert(`el nombre ${nombre} esta duplicado `);
        return;
    }

    //agregar el nombre
    amigos.push(nombre);
    agregarAmigo.ariaValueMax = "";

    actualizarLista();  
}

//actulizarf la lista 

function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //limpiar el contenido actual 
    listaAmigos.innerHTML = "";//borradno contenido previo

    //se recorre el ararry
    for(let i = 0;i<amigos.length;i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
//seleccionar un amigo aleatorio
function sortearAmigo(){
    //validando amigos disponibles
    if(amigos.length == 0 ){
        alert("no hay amigos disponibles");
        return;
    }
    const indiceAle = Math.floor(Math.random()  * amigos.length)

    //detener el nombr esorteado
    const amigosSort =  amigos[indiceAle];

    const resultado = document.getElementById('Resultado');
    resultado.innerHTML =  `Amigo sorteado: <strong>${amigosSort}</strong>`; 
}