const blockRef = document.querySelector(".block");
const bodyRef = document.querySelector("body");
const initialHeight = blockRef.clientHeight;
const initialWidth = blockRef.clientWidth;

let counterBottom = 0;
let counterRight = 0;

const ArrowDownAndUp = function (key) {
  if (key.key === "ArrowUp") {
    counterBottom += 10;
    blockRef.style.marginBottom = `${counterBottom}px`;
  } else if (key.key === "ArrowDown") {
    counterBottom -= 10;
    blockRef.style.marginBottom = `${counterBottom}px`;
  }
  jumpsAwayBlock();
};

const ArrowRightAndLeft = function (key) {
  if (key.key === "ArrowLeft") {
    counterRight += 10;
    blockRef.style.marginRight = `${counterRight}px`;
  } else if (key.key === "ArrowRight") {
    counterRight -= 10;
    blockRef.style.marginRight = `${counterRight}px`;
  }
  jumpsAwayBlock();
};

const jumpsAwayBlock = () => {
  const getBlockBounding = blockRef.getBoundingClientRect();
  const getBodyBounding = bodyRef.getBoundingClientRect();

  if (getBlockBounding.top <= 0) {
    blockRef.style.marginBottom = `${(counterBottom -= 30)}px`;
    printBems();
  } else if (getBlockBounding.bottom >= getBodyBounding.height) {
    blockRef.style.marginBottom = `${(counterBottom += 30)}px`;
    printBems();
  }

  if (getBlockBounding.left < 0) {
    blockRef.style.marginRight = `${(counterRight -= 30)}px`;
    printBems();
  } else if (getBlockBounding.right >= getBodyBounding.width) {
    blockRef.style.marginRight = `${(counterRight += 30)}px`;
    printBems();
  }
};

const printBems = () => {
  const text = document.createElement("h1");
  text.classList = "text";
  text.textContent = "БЕМС";
  blockRef.appendChild(text);

  setTimeout(() => {
    blockRef.removeChild(text);
  }, 2000);
};

const SpaceBlock = (key) => {
  if (key.code === "Space") {
    blockRef.style.transition = "transform 0.5s";
    blockRef.style.transform = "translateY(-20px)";
    setTimeout(() => {
      blockRef.style.transform = "translateY(0)";
    }, 300);
  }
};

const ControlBlock = (key) => {
  if (key.code === "ControlLeft" || key.code === "ControlRight") {
    blockRef.style.transition = "height 0.5s, width 0.5s";
    blockRef.style.height = `${initialHeight * 0.6}px`;
    blockRef.style.width = `${initialWidth * 1.25}px`;
    setTimeout(() => {
      blockRef.style.height = `${initialHeight}px`;
      blockRef.style.width = `${initialWidth}px`;
    }, 1000);
  }
};

window.addEventListener("keydown", ArrowDownAndUp);
window.addEventListener("keydown", ArrowRightAndLeft);
window.addEventListener("keydown", SpaceBlock);
window.addEventListener("keydown", ControlBlock);
