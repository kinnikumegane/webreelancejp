const sharp = require('sharp');
const fs = require('fs');
const directory = '../assets/images';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(870, 522) // width, height
    .toFile(`${directory}/${file}-small.jpg`);
  });