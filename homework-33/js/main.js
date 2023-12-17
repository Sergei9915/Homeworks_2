const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
];

const productsByCategory = {
  "Category 1": ["Product 1.1", "Product 1.2"],
  "Category 2": ["Product 2.1", "Product 2.2", "Product 2.3"],
  "Category 3": ["Product 3.1", "Product 3.2"],
  "Category 4": ["Product 4.1", "Product 4.2", "Product 4.3"],
  "Category 5": ["Product 5.1", "Product 5.2"],
};

const categoriesList = document.getElementById("categoriesList");
const productsList = document.getElementById("productList");
const productInfoDiv = document.getElementById("productInfo");

categories.forEach((category) => {
  const categoryLi = document.createElement("li");
  categoryLi.textContent = category;

  categoryLi.addEventListener("click", () => showProducts(category));
  categoriesList.appendChild(categoryLi);
});

function showProducts(category) {
  productsList.innerHTML = "";
  productInfoDiv.innerHTML = "";

  productsByCategory[category].forEach((product) => {
    const productDiv = document.createElement("li");
    productDiv.classList.add("product");
    productDiv.textContent = product;

    productDiv.addEventListener("click", () => showProductInfo(product));
    productsList.appendChild(productDiv);
  });
}

function showProductInfo(product) {
  productInfoDiv.innerHTML = "";

  const productInfoText = document.createElement("p");
  productInfoText.textContent = `Product: ${product}`;

  productInfoDiv.appendChild(productInfoText);

  const buyButton = document.createElement("button");
  buyButton.textContent = "Купити";
  buyButton.id = "btn";

  buyButton.addEventListener("click", () => buyProduct(product));
  productInfoDiv.appendChild(buyButton);
}

function buyProduct(product) {
  alert(`Товар ${product} куплений!`);
  showCategories();
}

function showCategories() {
  productsList.innerHTML = "";
  productInfoDiv.innerHTML = "";
}
