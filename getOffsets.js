const request = require('request');
const fs = require('fs');

request({
  url: 'https://raw.githubusercontent.com/frk1/hazedumper/master/csgo.json',
  json: true
}, (err, res, body) => {
  if (err) console.log(err);
  fs.writeFile('./offsets.json', JSON.stringify(body, null, 2), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Offsets downloaded.\nLast updated at:', new Date(require('./offsets.json').timestamp * 1000));
    }
  });
});
