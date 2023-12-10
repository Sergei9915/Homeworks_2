let globalPositions; //создаем переменную - глоб. должности.

const getWorker = (worker) => console.log(worker);

const getAssistant = (assistant) => {
  getFile(`./files/${globalPositions[3]}.json`, getWorker); // вызываем функ-цию, которая выводит нам worker.
  console.log(assistant);
};

const getManager = (manager) => {
  getFile(`./files/${globalPositions[2]}.json`, getAssistant); // вызываем функ-цию, которая выводит нам assistant.
  console.log(manager);
};
const getInvestor = (investor) => {
  getFile(`./files/${globalPositions[1]}.json`, getManager); // вызываем функ-цию, которая выводит нам manager.
  console.log(investor);
};

// получаем должности
const getPositions = (positions) => {
  globalPositions = positions; // создаем копию д  олжностей.
  getFile(`./files/${globalPositions[0]}.json`, getInvestor); // вызываем функ-цию, которая выводит нам investor.
  console.log(positions);
};

//
const getFile = (file, cb) => {
  const xhr = new XMLHttpRequest(); // создаем копию обьекта, чтобы работать с метадами.
  xhr.open("GET", file); // делаем запрос на file.
  xhr.send(); // отправляем запрос.

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4) {
      const isStatus = xhr.status >= 200 && xhr.status < 400;
      const response = isStatus ? JSON.parse(xhr.response) : {};

      cb(response);
    }
  });
};

getFile("./files/positions.json", getPositions);
