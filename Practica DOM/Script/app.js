function cambiarT () {
    document.getElementById('texto').textContent = '¿Cómo estás?';
}

function cambiarC () {
    var estilo= document.getElementById('estilo');
    estilo.style.backgroundColor= "aqua";
}

function cambiarE () {
    alert('¡Haz hecho click!');
}

function cambiarTe() {
    let testo = document.getElementById('testo');
    let boton = document.getElementById('boton');
    
    if (boton.textContent == '¿Ocultar?') {
        boton.textContent = '¿Mostrar?';
        testo.style.display='none';
    }
    else {
        boton.textContent = '¿Ocultar?';
        testo.style.display = 'block';
        testo.textContent = 'Ola de nuevo';
    } 
} 