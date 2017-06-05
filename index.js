// 1

const file = require('./file-promise');

file
  .read('./data.txt')
  .then(data => data.toUpperCase())
  .then(data => file.write('./upper-data.txt', data))
  .then(filename => console.log(`Создан файл ${filename}`))
  .catch(err => console.error(err));

// 2

const readAll = require('./read-all');

function show(file) {
  console.log('-'.repeat(10));
  console.log(`Содержимое файлы ${file.name}:`);
  console.log(file.content);
  console.log('-'.repeat(10));
}

readAll('./logs/')
  .then(files => files.forEach(show))
  .catch(err => console.error(err));