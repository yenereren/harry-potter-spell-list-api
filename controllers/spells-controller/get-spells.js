
const { response } = require('express');
const spellsService = require('../../services/spells-service/index');

const getSpells = async (req) => {
    const spells = await spellsService.getSpells();
    return spells;
}

module.exports = getSpells;