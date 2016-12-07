const memTool = require('../tools/memTool.js');
const offsets = require('../offsets.json');
const mem = require('memoryjs');

var local = {
  getLocal: () => mem.readMemory(memTool.client_dll + offsets.signatures.dwLocalPlayer, 'int'),
  getInCross: () => mem.readMemory(local.getLocal() + offsets.netvars.m_iCrosshairId, 'int'),
  getTeamNum: () => mem.readMemory(local.getLocal() + offsets.netvars.m_iTeamNum, 'int'),
  getFlags: () => mem.readMemory(local.getLocal() + offsets.netvars.m_fFlags, 'int'),
  setJumpState: (state) => mem.writeMemory(memTool.client_dll + offsets.signatures.dwForceJump, state, 'int')
};

module.exports = local;
