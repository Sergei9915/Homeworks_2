const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log('characters:', characters);

const generateKey = (length, characters) => {
  let key = '';

  for (i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * characters.length);
    key += characters.charAt(random);
  }
  return key;
};

const key = generateKey(3, characters);
console.log('key:', key);