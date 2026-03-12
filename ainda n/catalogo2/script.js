const buttons = document.querySelectorAll(".filters button")
const products = document.querySelectorAll(".product")

buttons.forEach(button => {

button.addEventListener("click", () => {

const filter = button.dataset.filter

products.forEach(product => {

if(filter === "all"){
product.style.display = "block"
}

else if(product.classList.contains(filter)){
product.style.display = "block"
}

else{
product.style.display = "none"
}

})

})

})

function order(product){

let phone = "5590000000000"

let message = `Hello, I am interested in this product: ${product}`

let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

window.open(url,"_blank")

}
