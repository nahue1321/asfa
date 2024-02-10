// Función para generar un número único basado en el dispositivo
function obtenerNumeroUnico() {
    // Puedes utilizar cualquier lógica aquí para generar un número único
    // En este ejemplo, se utiliza el ancho de la pantalla y el user agent
    return window.innerWidth ^ parseInt(window.navigator.userAgent.length);
}

// Función para obtener un versículo bíblico único basado en el número único
function obtenerVersiculo() {
    const numeroUnico = obtenerNumeroUnico();
    // Array con los versículos proporcionados
    const versiculos = [
        "Por tanto, no hay ninguna condenación para los que están unidos a Cristo Jesús, los que no andan conforme a la carne, sino conforme al Espíritu, - Romanos 8:1",
        "Porque la ley del Espíritu de vida en Cristo Jesús me ha librado de la ley del pecado y de la muerte. - Romanos 8:2",
        "Porque Dios ha hecho lo que para la ley era imposible hacer, debido a que era débil por su naturaleza pecaminosa: por causa del pecado envió a su Hijo en una condición semejante a la del hombre pecador, y de esa manera condenó al pecado en la carne, - Romanos 8:3",
        "Para que la justicia de la ley se cumpliera en nosotros, que no seguimos los pasos de nuestra carne, sino los del Espíritu. - Romanos 8:4",
        "Porque los que siguen los pasos de la carne fijan su atención en lo que es de la carne, pero los que son del Espíritu, la fijan en lo que es del Espíritu. - Romanos 8:5",
        "Porque el ocuparse de la carne es muerte, pero el ocuparse del Espíritu es vida y paz. - Romanos 8:6",
        "Las intenciones de la carne llevan a la enemistad contra Dios; porque no se sujetan a la ley de Dios, ni tampoco pueden; - Romanos 8:7",
        "Además, los que viven según la carne no pueden agradar a Dios. - Romanos 8:8",
        "Pero ustedes no viven según las intenciones de la carne, sino según el Espíritu, si es que el Espíritu de Dios habita en ustedes. Y si alguno no tiene el Espíritu de Cristo, no es de él. - Romanos 8:9"
    ];

    // Seleccionamos un versículo basado en el número único
    const indice = numeroUnico % versiculos.length;
    return versiculos[indice];
}

// Función principal para actualizar el versículo del día
function actualizarVersiculo() {
    const versiculoElemento = document.getElementById('versiculo');
    const versiculo = obtenerVersiculo();
    versiculoElemento.textContent = versiculo;
}

// Llamamos a la función principal cuando la página se carga
window.onload = actualizarVersiculo;
