// Función principal para inicializar todos los eventos
function init() {
    handleSidebarVisibility();   // Maneja la visibilidad del menú lateral al hacer scroll
    handleScrollToTopButton();   // Muestra u oculta el botón de "subir" según el scroll
    changeTab('evento');  // Llama a la función changeTab y pasa el id de la pestaña que quieres activar inicialmente
}

// Detectamos el scroll y mostramos el menú lateral cuando se supera un umbral
function handleSidebarVisibility() {
    window.addEventListener("scroll", function () {
        const sidebar = document.getElementById("sidebar");
        if (window.scrollY > (window.innerHeight - 300)) {
            // Muestra el menú después de superar el alto de la pantalla menos 300px
            sidebar.classList.add("show");
        } else {
            sidebar.classList.remove("show");
        }
    });
}

// Función para mostrar una imagen en un modal al hacer clic
function showImage(img) {
    document.getElementById("modalImage").src = img.src; // Establece la fuente de la imagen en el modal
}

// Función para manejar la visibilidad y el comportamiento del botón de "subir"
function handleScrollToTopButton() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Mostrar el botón de "subir" cuando se hace scroll
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "block"; // Mostrar el botón
        } else {
            scrollToTopBtn.style.display = "none"; // Ocultar el botón
        }
    };

    // Función para ir hacia arriba cuando se hace clic en el botón
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazamiento suave hacia arriba
    });
}


function changeTab(tabId) {
    // Ocultar todos los contenidos de las pestañas
    const tabContents = document.querySelectorAll('.tab-pane');
    tabContents.forEach(content => content.classList.remove('show', 'active'));

    // Eliminar la clase 'active' de todos los botones
    const tabButtons = document.querySelectorAll('.btn-group .btn');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Mostrar el contenido correspondiente a la pestaña seleccionada
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('show', 'active');

    // Activar el botón correspondiente
    const selectedButton = document.getElementById(tabId + '-btn');
    selectedButton.classList.add('active');
}


// Llamar a la función de inicialización al cargar la página
window.onload = init;

