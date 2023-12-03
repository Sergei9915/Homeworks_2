const blockRef = document.querySelector(".block");

setInterval(() => {
  const hexCodes = "0123456789ABCDEF";
  let color = "";

  for (let a = 0; a < 6; a++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }

  blockRef.textContent = "#" + color;
  blockRef.style.background = "#" + color;
}, 500);

setInterval(() => {
  const blockHeight = blockRef.clientHeight;
  const blockWidth = blockRef.clientWidth;

  const top = window.innerHeight - blockHeight;
  const left = window.innerWidth - blockWidth;

  const randomTop = Math.random() * top;
  const randomLeft = Math.random() * left;

  blockRef.style.top = `${randomTop}px`;
  blockRef.style.left = `${randomLeft}px`;
}, 1000);

setInterval(() => {});
