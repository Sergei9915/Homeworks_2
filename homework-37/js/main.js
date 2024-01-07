const refs = {
  input: document.querySelector("#input"),
  btn: document.querySelector("#btn"),
  post: document.querySelector("#post"),
};

async function getData(url) {
  const request = await fetch(url);
  const result = request.ok ? request.json() : Promise.cath(request.statusText);

  return result;
}

async function findPostAndComments(number) {
  try {
    const posts = await getData(
      `https://jsonplaceholder.typicode.com/posts/${number}`
    );

    const comments = await getData(
      `https://jsonplaceholder.typicode.com/comments/${number}`
    );

    appendPost(posts, comments);
  } catch (error) {
    alert("Please enter from 1-100");
    console.log(error);
  }
}

refs.btn.addEventListener("click", () => findPostAndComments(refs.input.value));

const appendPost = (post, comment) => {
  refs.post.innerHTML = `
<h1>${post.title}</h1>
<p>${post.body}</p>
`;

  const btn = document.createElement("button");
  btn.textContent = "Get Comment";

  btn.addEventListener("click", () => appendComment(comment));

  refs.post.append(btn);
};

const appendComment = (comment) => {
  const commentInfo = document.createElement("div");

  commentInfo.innerHTML = `
    <p>Name: ${comment.name}</p>
    <p>Email: ${comment.email}</p>
    <p>Comment: ${comment.body}</p>
    `;

  refs.post.append(commentInfo);
};
