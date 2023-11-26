const lastClassLi = () => {
  const ulRef = document.querySelectorAll("ul");
  ulRef.forEach((el) => {
    const lastLi = el.lastElementChild;
    lastLi.classList.add("last");
  });
};

setTimeout(lastClassLi, 2000);

//* без уровней.
// const firstClassLi = () => {
//   const ulRef = document.querySelectorAll("ul");
//   ulRef.forEach((el) => {
//     const firstLi = el.firstElementChild;
//     firstLi.classList.add("first");
//   });
// };

// setTimeout(firstClassLi, 2000);

const ulRef = document.querySelector(".root");

function setFirstItemClassName(level, ul) {
  const firstLi = ul.querySelector("li"); // ищем тег li.
  firstLi.classList.add("first"); // добавили ему класс first.

  level--;

  if (level > 0) {
    const liArr = [...ul.children]; // создаем массив из детей ul [li, li, li].

    liArr.forEach((li) => {
      const innerLi = [...li.children]; // проходимся по массиву liArr и создаем новый массив из детей li [ul, ul];

      innerLi.forEach((el) => {
        setFirstItemClassName(level, el);
      });
    });
  }
}

setFirstItemClassName(2, ulRef);
