// 1. Animación de aparición al hacer scroll (Scroll Reveal)
function revelarSecciones() {
    const elementos = document.querySelectorAll('.reveal');
    const alturaVentana = window.innerHeight;

    elementos.forEach(el => {
        const distanciaTop = el.getBoundingClientRect().top;
        if (distanciaTop < alturaVentana - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revelarSecciones);
revelarSecciones(); // Ejecutar al cargar por si hay elementos visibles

// 2. Contador animado para la sección de Beneficios
let contadoresActivados = false;

function animarContadores() {
    const seccionBeneficios = document.getElementById('beneficios');
    const posicion = seccionBeneficios.getBoundingClientRect().top;

    if (posicion < window.innerHeight - 100 && !contadoresActivados) {
        contadoresActivados = true;
        const contadores = document.querySelectorAll('.counter');

        contadores.forEach(contador => {
            const objetivo = +contador.getAttribute('data-target');
            let actual = 0;
            const incremento = Math.ceil(objetivo / 40);

            const intervalo = setInterval(() => {
                actual += incremento;
                if (actual >= objetivo) {
                    contador.innerText = objetivo;
                    clearInterval(intervalo);
                } else {
                    contador.innerText = actual;
                }
            }, 35);
        });
    }
}

window.addEventListener('scroll', animarContadores);

// 3. Interactividad del formulario Llamado a la Acción (CTA)
const formulario = document.getElementById('cta-form');
const mensajeExito = document.getElementById('mensaje-exito');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita que la página se recargue
    formulario.style.display = 'none';
    mensajeExito.classList.remove('hidden');
});