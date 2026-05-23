// Inicializar animações de scroll (AOS)
AOS.init({
    duration: 1000,
    once: true
});

// Mudança de cor do header ao rolar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 5%';
        navbar.style.background = '#ffffffef';
    } else {
        navbar.style.padding = '20px 5%';
        navbar.style.background = '#ffffff';
    }
});

// Mock de envio de formulário
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    form.reset();
});