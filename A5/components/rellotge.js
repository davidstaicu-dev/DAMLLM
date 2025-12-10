// Javascript per el rellotge (Exercici 3)
let segons = 0;
let minuts = 0;
let hores = 0;

function actualitzarRellotge() {
    segons++;
    
    if (segons >= 60) {
        segons = 0;
        minuts++;
    }
    
    if (minuts >= 60) {
        minuts = 0;
        hores++;
    }
    
    // Formatem amb zeros a l'esquerra
    const segonsFormat = segons < 10 ? '0' + segons : segons;
    const minutsFormat = minuts < 10 ? '0' + minuts : minuts;
    const horesFormat = hores < 10 ? '0' + hores : hores;
    
    document.getElementById('rellotge').textContent = 
        `Temps: ${horesFormat}:${minutsFormat}:${segonsFormat}`;
}

// Iniciar el rellotge quan es carregui la pàgina
window.onload = function() {
    setInterval(actualitzarRellotge, 1000);
}
