// DICHRAZIONE ARRAY

const img = [
    "IMG/01.webp",
    "IMG/02.webp",
    "IMG/03.webp",
    "IMG/04.webp",
    "IMG/05.webp",
];

// VARIABILI
let currentImage = 0;

// creo una variabile per contenere l'elemento html
const sliderImgEl = document.querySelector(".img-container");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");  


// assegno alla variabile l'immagine in posizione 0
sliderImgEl.src = img[currentImage];


  // evento bottone Prev
  btnPrev.addEventListener("click", function () {
    console.log("click prev");
    // decremento l'indice dell'array
    currentImage--;
    console.log(currentImage);
    
    // controllo che l'indice non sia minore di 0
    if (currentImage < 0) {
      currentImage = 0;
    }
  
    // assegno l'immagine della posizone corrente
    sliderImgEl.src = img[currentImage];
  });
  
  // evento bottone Next
  btnNext.addEventListener("click", function () {
    console.log("click next");
  
   
   
  
    // incremento l'indice dell'array
    currentImage++;
    console.log(currentImage);
    // variabile con l'ultimo indice dell'array
    const lastImage = img.length - 1;
  
    // verifico la posizione dell'indice
    if (currentImage > lastImage) {
      // lo riporta su zero
      currentImage = 0;
    }
    // assegno l'immagine della posizone corrente
    sliderImgEl.src = img[currentImage];
  
    
  });
  