const btnRef = document.querySelectorAll(".smile");
const textRef = document.querySelectorAll(".text");

btnRef.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    textRef[index].textContent = parseInt(textRef[index].textContent) + 1;
    textRef[index].style.border = "2px solid green";
  });
});
