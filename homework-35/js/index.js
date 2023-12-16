const userData = {
  USD: 1000,
  EUR: 900,
  UAH: 15000,
  BIF: 20000,
  AOA: 100,
};

const bankData = {
  USD: {
    max: 3000,
    min: 100,
    img: "💵",
  },
  EUR: {
    max: 1000,
    min: 50,
    img: "💶",
  },
  UAH: {
    max: 0,
    min: 0,
    img: "💴",
  },
  GBP: {
    max: 10000,
    min: 100,
    img: "💷",
  },
};

const currencyFromList = (list) => {
  currency = prompt(`Виберіть влюту зі списку - ${list}`);

  while (!list.includes(currency)) {
    alert("Доступної валюти немає!");

    currency = prompt(`Виберіть влюту зі списку - ${list}`);
  }
};

const getMoney = () =>
  new Promise((resolve, reject) => {
    const userPrompt = prompt(
      "Подивитися баланс карті?\n ↓ Введіть (Так/Ні) ↓"
    );
    if (userPrompt.toLowerCase() === "так") {
      resolve(userData);
    } else if (userPrompt.toLowerCase() === "ні") {
      reject([userData, bankData]);
    } else {
      alert("Упс...щось пішло не так, спробуйте ще раз!");
    }
  });

getMoney()
  .then((data) => {
    list = Object.keys(data);

    currencyFromList(list);

    if (list.includes(currency)) {
      const balance = data[currency];
      alert(`Баланс картки: ${balance} ${currency}`);
    }
  })

  .catch(([data, dataBank]) => {
    list = Object.keys(dataBank);

    const withdrawMoney = prompt("Бажаєте зняти кошти \n ↓ Введіть (Так/Ні) ↓");
    withdrawMoney.toLowerCase() === "так"
      ? currencyFromList(list)
      : console.log("Err");

    const userMax = dataBank[currency].max;
    const userMin = dataBank[currency].min;

    const userAmountMoney = +prompt(
      `Введіть суму для зняття. Доступна сума від ${userMin} до ${userMax} ${currency}`
    );

    if (isNaN(userAmountMoney) || userAmountMoney <= 0) {
      alert("Введена некоректна сума.");
    } else if (userAmountMoney > userMax) {
      alert(
        `Введена сума більша за доступну.\n Максимальна сума зняття: ${userMax} ${currency}`
      );
    } else if (userAmountMoney < userMin) {
      alert(
        `Введена сума менша за доступну.\n Мінімальна сума зняття: ${userMin} ${currency}`
      );
    } else {
      alert(
        `От Ваші гроші ${userAmountMoney} ${currency} ${dataBank[currency].img}`
      );
    }
  })

  .catch((err) => console.log(err))

  .finally(function () {
    alert("Гарного дня :)");
  });
