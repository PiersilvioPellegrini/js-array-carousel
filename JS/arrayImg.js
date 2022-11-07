// DICHRAZIONE ARRAY

const img = [
  "IMG/01.webp",
  "IMG/02.webp",
  "IMG/03.webp",
  "IMG/04.webp",
  "IMG/05.webp",
];

const imgContainer = document.querySelector(".img-container");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

// VARIABILI
// assegno alla variabile l'immagine in posizione 0
let currentImageIndex = 0;

// CICLO PER LA CREAZIONE DI ELEMENTI IMG
for (let i = 0; i < img.length; i++) {
  // assegno alla variabile l'indice dell'array
  const currentImage = img[i];
  console.log(currentImage);
  const ImgEl = document.createElement("img");
  // inserisco dentro src la sorgente img
  ImgEl.src = currentImage;
  // inserisco nel contenitore l'elemento
  imgContainer.append(ImgEl);

  // nascondo tutte le immagini tranne la prima
  if (i === currentImageIndex) {
    ImgEl.classList.add("active");
  }
}
// evento bottone Prev
btnPrev.addEventListener("click", function () {
  console.log("click prev");
  // decremento l'indice dell'array
  const oldImgEl = imgContainer.querySelector(".active");
  oldImgEl.classList.remove("active");
  currentImageIndex--;
  console.log(currentImageIndex);
  
  const imgElements = imgContainer.querySelectorAll("img");
  const newImgEl = imgElements[currentImageIndex];
  newImgEl.classList.add("active");
  const lastImage = img.length - 1;

  // controllo che l'indice non sia minore di 0
  if (currentImageIndex < 0) {
    currentImageIndex = 0;
  }
});

// evento bottone Next
btnNext.addEventListener("click", function () {
  console.log("click next");
 //elimino la classe active all'immagine precedente
  const oldImgEl = imgContainer.querySelector(".active");
  oldImgEl.classList.remove("active");
  
  currentImageIndex++;
  
  const imgElements = imgContainer.querySelectorAll("img");
  const newImgEl = imgElements[currentImageIndex];
  newImgEl.classList.add("active");
  
  console.log(currentImageIndex);
  // variabile con l'ultimo indice dell'array
  const lastImage = img.length ;

  // verifico la posizione dell'indice
  if (currentImageIndex > lastImage) {
    // lo riporta su zero
    currentImageIndex = lastImage;
  }

});
