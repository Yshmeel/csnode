const memTool = require('../tools/memTool.js');
const offsets = require('../offsets.json');
const mem = require('memoryjs');

var local = {
  getLocal: () => mem.readMemory(memTool.client_dll + offsets.signatures.dwLocalPlayer, 'int'),
  getInCross: () => mem.readMemory(local.getLocal() + offsets.netvars.m_iCrosshairId, 'int'),
  getTeamNum: () => mem.readMemory(local.getLocal() + offsets.netvars.m_iTeamNum, 'int'),
  getFlags: () => mem.readMemory(local.getLocal() + offsets.netvars.m_fFlags, 'int'),
  getFlashAlpha: () => mem.readMemory(local.getLocal() + offsets.netvars.m_flFlashMaxAlpha, 'float'),
  // Spacer between getters and setters
  setJumpState: (state) => mem.writeMemory(memTool.client_dll + offsets.signatures.dwForceJump, state, 'int'),
  setFlashAlpha: () => mem.writeMemory(local.getLocal() + offsets.netvars.m_flFlashMaxAlpha, 0.0, 'float')
};

module.exports = local;
