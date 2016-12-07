const memTool = require('../tools/memTool.js');
const offsets = require('../offsets.json');
const mem = require('memoryjs');

var entity = {
  getEntity: (EntId) => mem.readMemory(memTool.client_dll + offsets.signatures.dwEntityList + ((EntId) * 0x10), 'int'),
  getTeamNum: (EntId) => mem.readMemory(entity.getEntity(EntId) + offsets.netvars.m_iTeamNum, 'int')
};

module.exports = entity;
