function filterGallery(category){

let images = document.querySelectorAll(".gallery img")

images.forEach(img => {

if(category === "all"){
img.style.display = "block"
}

else if(img.classList.contains(category)){
img.style.display = "block"
}

else{
img.style.display = "none"
}

})

}
