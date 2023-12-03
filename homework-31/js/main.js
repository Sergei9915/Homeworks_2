const btnPromptRef = document.querySelector("#btn-prompt");
const btnClickRef = document.querySelector("#btn-click");

btnPromptRef.addEventListener("click", () => {
  let userPromptLink = prompt("Enter link: ");

  if (
    userPromptLink.startsWith("http") === false &&
    userPromptLink.startsWith("https") === false
  ) {
    userPromptLink = `https://${userPromptLink}`;
  } else {
    alert("Click on the button --> click to go");
  }

  btnClickRef.addEventListener("click", () => {
    location.href = userPromptLink;
  });
});
