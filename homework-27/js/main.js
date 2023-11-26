const imgRef = document.querySelector("#img");
const btnRef = document.querySelector(".btn-1");

function randomImg(img) {
  const randomNumber = Math.floor(1 + Math.random() * (9 + 1 - 1));
  img.src = `./img/img${randomNumber}.jpg`;
}

btnRef.addEventListener("click", () => {
  randomImg(imgRef);
});
