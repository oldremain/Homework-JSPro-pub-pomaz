// Строки
// 1	Удалить из предложения все слова все слова, содержащие заданный символ.

let lorem =
  'Mi egestas cubilia felis nam facilisis sollicitudin. Lorem aptent senectus vel penatibus diam mus per. Dapibus leo sollicitudin ridiculus';

function deleteWordsByChar(str, char) {
  return str
    .split(' ')
    .filter((word) => !word.includes(char))
    .join(' ');
}

console.log(deleteWordsByChar(lorem, 'i'));
