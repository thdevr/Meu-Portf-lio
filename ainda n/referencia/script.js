// Gerenciamento simples do carrinho
let cartItems = 0;
const cartCount = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.add-to-cart');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartItems++;
        cartCount.innerText = cartItems;
        
        // Feedback visual
        button.innerText = "Adicionado!";
        button.style.backgroundColor = "#c5a059";
        
        setTimeout(() => {
            button.innerText = "Adicionar ao Carrinho";
            button.style.backgroundColor = "#111";
        }, 1500);
    });
});

// Animação de Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});