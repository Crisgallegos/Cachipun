function juego(opcionUsuario) {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const opcionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
    const result = ganador(opcionUsuario, opcionMaquina);
    
    document.getElementById('result').innerHTML = `
        Tú elegiste: ${opcionUsuario}<br>
        La máquina eligió: ${opcionMaquina}<br>
        Resultado: ${result}
    `;
}

function ganador(opcionUsuario, opcionMaquina) {
    if (opcionUsuario === opcionMaquina) {
        return 'Es un empate!';
    }
    if (
        (opcionUsuario === 'piedra' && opcionMaquina === 'tijeras') ||
        (opcionUsuario === 'papel' && opcionMaquina === 'piedra') ||
        (opcionUsuario === 'tijeras' && opcionMaquina === 'papel')
    ) {
        return 'Ganaste!';
    } else {
        return 'Perdiste!';
    }
}
