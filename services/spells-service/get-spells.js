const axios = require('axios');

const getSpells = async () => {

    const response = await axios.get('https://cdn.dsmcdn.com/ty152/febootcamp-harry-potter-game/spell-list.json');
    
    return response.data;

}

module.exports = getSpells;