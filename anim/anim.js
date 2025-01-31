document.addEventListener("DOMContentLoaded", () => {
    // Mover la nube de izquierda a derecha
    let nube = document.getElementById("nube");
    let nubeX = -100; // Posición inicial fuera de pantalla

    function moverNube() {
        nubeX += 1;
        nube.style.left = nubeX + "px";

        if (nubeX > 800) nubeX = -100; // Reinicia la posición
        requestAnimationFrame(moverNube);
    }

    // Mover la bicicleta de izquierda a derecha y para atrás
    let bici = document.getElementById("bici");
    let biciX = -2;
    let animacionActiva = false;
    let direccion = 1; // 1 = derecha, -1 = izquierda
    // Sonido Bici
    let sonidoBici = new Audio("sonidos/bici_mov.mp3");
    let campanaBici = new Audio("sonidos/campana.mp3"); 
  
    function moverBici() {
        if (!animacionActiva) return; 

        sonidoBici.play();
        biciX += 2 * direccion;
        bici.style.left = biciX + "px";

        if (biciX > 674 || biciX < 0) {
            campanaBici.play();
            direccion *= -1; // Cambia la dirección al llegar a los bordes
            bici.style.transform = `scaleX(${direccion})`; // Voltea la bici en x
        }

        campanaBici.play();

        requestAnimationFrame(moverBici);
    }

    /*
    // Movimiento del sol (Sube y baja)
    let sol = document.getElementById("sol");
    let solY = 45;
    let subiendo = true;
    */
    
    // Iniciar animaciones
    moverNube();
    document.addEventListener("click", () => {
        if (!animacionActiva) {
            animacionActiva = true;
            moverBici();
        }
    });
});
