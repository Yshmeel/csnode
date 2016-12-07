var fs = require('fs');
if (!fs.existsSync('./offsets.json')) {
  console.log('You need to run "node getOffsets.js" in order to download the latest offsets');
  process.exit();
}

const aks = require('asynckeystate');
const sleep = require('sleep');
const robot = require('robotjs');
const local = require('./props/local.js');
const entity = require('./props/entity.js');

function tBot () {
  if (aks.getAsyncKeyState(0x06)) {
    var inCrossId = local.getInCross();
    if (inCrossId > 0 && inCrossId <= 64 && entity.getTeamNum(inCrossId - 1) !== local.getTeamNum()) {
      robot.mouseClick();
      sleep.usleep(50);
    }
  }
}

function bHop () {
  if (aks.getAsyncKeyState(0x20)) {
    var iFlags = local.getFlags();
    local.setJumpState(((iFlags === 257) || (iFlags === 263)) ? 5 : 4);
  }
}

function noFlash () {
  if (local.getFlashAlpha() > 0) {
    local.setFlashAlpha();
  }
}

console.log('Attatched onto the CSGO process\nCheat is now running');
while (!aks.getAsyncKeyState(0x77)) {
  tBot();
  bHop();
  noFlash();
  sleep.usleep(10);
}
console.log('Exited csnode');
