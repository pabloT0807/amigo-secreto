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


//seleccionar un amigo aleatorio

//