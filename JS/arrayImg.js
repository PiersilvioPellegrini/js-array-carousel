// DICHRAZIONE ARRAY

const img = [
  "IMG/01.webp",
  "IMG/02.webp",
  "IMG/03.webp",
  "IMG/04.webp",
  "IMG/05.webp",
];

const imgContainer = document.getElementById("img-container");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

// VARIABILI
// assegno alla variabile l'immagine in posizione 0
//  let currentImage = 0;

// ImgEl.src = img[currentImage];

for (let i = 0; i < img.length; i++) {
  const currentImage = img[i];
  console.log(currentImage);
  const ImgEl = document.createElement("img");
  ImgEl.src = currentImage;
  imgContainer.append(ImgEl);
}
// evento bottone Prev
btnPrev.addEventListener("click", function () {
  console.log("click prev");
  // decremento l'indice dell'array
  currentImage--;
  console.log(currentImage);
  const lastImage = img.length - 1;

  // controllo che l'indice non sia minore di 0
  if (currentImage < 0) {
    currentImage = lastImage;
  }

  // assegno l'immagine della posizone corrente
  ImgEl.src = img[currentImage];
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
  ImgEl.src = img[currentImage];
});
