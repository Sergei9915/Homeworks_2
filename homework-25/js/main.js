function gerenerateRandomColor() {
  const hexCodes = "0123456789ABCDEF";
  let color = "";

  for (let a = 0; a < 6; a++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }

  return "#" + color;
}

const createTable = function (row, col) {
  const tableRef = document.querySelector(".table");

  let counter = 1;

  for (let i = 0; i < row; i++) {
    const rowRef = document.createElement("tr");

    for (let j = 0; j < col; j++) {
      const colRef = document.createElement("td");
      colRef.textContent = counter;
      colRef.style.fontSize = "30px";
      colRef.style.background = gerenerateRandomColor();
      counter++;
      rowRef.appendChild(colRef);
    }
    tableRef.appendChild(rowRef);
  }
};

createTable(10, 10);

const tableCol = document.querySelectorAll("td");

tableCol.forEach((el) => {
  el.addEventListener("click", () => {
    el.textContent = Math.floor(Math.random() * 100);
  });
});
