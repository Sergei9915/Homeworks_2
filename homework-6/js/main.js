let userYearOfBirth = prompt('Your year of birth?');
let userAge;
let messageToUser;

while (isNaN(userYearOfBirth)) {
  alert('You did not enter a number!');
  userYearOfBirth = prompt('Your year of birth?');
}

if (userYearOfBirth === null || userYearOfBirth.trim() === '') {
  alert('Error!!! One of the reasons is: \nYou canceled! \nEmpty line!');
} else {
  userAge = 2023 - parseInt(userYearOfBirth);
}

if (userAge < 18) {
  messageToUser = `You're ${userAge}. You're still a baby =)`
} else {
  messageToUser = `You're ${userAge}. You are no longer a child =)`
}

let userCityLives = prompt('What city do you live in?');
let userCapital;

while (parseFloat(userCityLives)) {
  alert('You entered the number!')
  userCityLives = prompt('What city do you live in?');
}

if (userCityLives === null || userCityLives.trim() === '') {
  alert('Error!!! One of the reasons is: \nYou canceled! \nEmpty line!');
}

switch (userCityLives) {
  case 'Kyiv':
    userCapital = 'You live in the capital of Ukraine.';
    break
  case 'Washington':
    userCapital = 'You live in the capital of the United States of America.';
    break
  case 'London':
    userCapital = 'You live in the capital of England.';
    break
  default:
    userCapital = `You live in the city ${userCityLives}.`
}

let userFavoriteSport = prompt('What is your favorite sport?');
let userSport;
let NameChampion;

while (parseFloat(userFavoriteSport)) {
  alert('You entered the number!');
  userFavoriteSport = prompt('What is your favorite sport?');
}

if (userFavoriteSport === null || userFavoriteSport.trim() === '') {
  alert('Error!!! One of the reasons is: \nYou canceled! \nEmpty line!');
}

switch (userFavoriteSport) {
  case 'Football':
    NameChampion = 'Lionel Messi';
    userSport = `Cool! Do you want to become ${NameChampion}?`;
    break
  case 'Basketball':
    NameChampion = 'Michael Jordan';
    userSport = `Cool! Do you want to become ${NameChampion}?`;
    break
  case 'Boxing':
    NameChampion = 'Alexander Usik'
    userSport = `Cool! Do you want to become ${NameChampion}?`;
    break
  default:
    userSport = `Cool! Your favorite sport ${userFavoriteSport}.`
}

if (userYearOfBirth === null || userYearOfBirth.trim() === '') {
  alert(`It's a pity that you didn't want to enter your date of birth. \n${userCapital} \n${userSport}`)
} else if (userCityLives === null || userCityLives.trim() === '') {
  alert(`${messageToUser} \nIt's a pity that you didn't want to enter your city. \n${userSport}`)
} else if (userFavoriteSport === null || userFavoriteSport.trim() === '') {
  alert(`${messageToUser} \n${userCapital} \nIt's a pity that you didn't want to introduce a sport.`)
}
else {
  alert(`${messageToUser} \n${userCapital} \n${userSport}`)
}

