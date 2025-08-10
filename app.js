// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
let amigos = [];

// Función para añadir un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById('listaAmigos');

    // Validar si el nombre está vacío
    if (nombre === '') {
        alert('Por favor ingrese un nombre válido');
        return;
    }

    // Añadir el nombre al array
    amigos.push(nombre);

    // Crear y añadir el nombre a la lista en la interfaz
    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    // Limpiar el campo de entrada
    input.value = '';
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Validar si hay nombres en la lista
    if (amigos.length === 0) {
        alert('Por favor añada al menos un nombre antes de sortear');
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    resultado.innerHTML = ''; // Limpiar resultados anteriores
    const li = document.createElement('li');
    li.textContent = `El amig@ secreto sorteado es: ${nombreSorteado}`;
    resultado.appendChild(li);
}
