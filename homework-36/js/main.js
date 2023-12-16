const select = document.querySelector("#jokesCategories ");
const ul = document.querySelector("#jokesList ");

const getFile = (file) =>
  fetch(file).then((data) =>
    data.ok ? data.json() : Promise.reject(data.statusText)
  );

getFile("https://api.chucknorris.io/jokes/categories").then((data) => {
  data.forEach((element) => {
    const option = document.createElement("option");
    option.value = element;
    option.textContent = element;
    select.append(option);
  });
});

const renderPost = (post) => {
  const liRef = document.createElement("li");
  liRef.innerHTML = ` 
    <p>Category: <b>${post.categories}</b></p>
    <p>${post.value}</p>`;

  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "Remove Joke";
  removeBtn.classList = "btn";

  const selectedOption = select.querySelector(`option[value=${categories}]`);
  selectedOption.disabled = true;

  removeBtn.addEventListener("click", () => {
    liRef.remove();
    selectedOption.disabled = false;
  });

  liRef.append(removeBtn);
  ul.append(liRef);
};

select.addEventListener("change", (el) => {
  categories = el.target.value;

  getFile(
    `https://api.chucknorris.io/jokes/random?category=${categories}`
  ).then((data) => {
    renderPost(data);
  });
});
