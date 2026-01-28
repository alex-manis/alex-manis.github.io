const pngToIco = require('png-to-ico');
const fs = require('fs');
const path = require('path');

const inputPng = 'C:\\Users\\ievle\\.cursor\\projects\\c-Users-ievle-Downloads-Full-stack-alex-manis-github-io\\assets\\red_lightsaber_favicon_v2.png';
const outputIco = path.join(__dirname, 'favicon.ico');

pngToIco(inputPng)
  .then(buf => {
    fs.writeFileSync(outputIco, buf);
    console.log('Favicon successfully converted and saved to:', outputIco);
  })
  .catch(err => {
    console.error('Error converting favicon:', err);
    process.exit(1);
  });
