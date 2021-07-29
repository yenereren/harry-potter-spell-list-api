const { assert } = require('chai');
const sinon = require('sinon');
const axios = require('axios');

const spellService = require('../../services/spells-service/index');

describe('spell service tests', function() {

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    })

    afterEach(() => {
        sandbox.restore();
    })

    it('should return empty array when spell list 3rd service is giving Not OK Status codes', async () => {
        
        const expectedData = [];
        const expectedStatusCode = 500;

        sandbox.stub(axios, "get").resolves(Promise.resolve({ status: expectedStatusCode, data: expectedData}));

        const result = await spellService.getSpells();

        assert.isFalse(result);
    })

    it('should return data', () => {

        const expectedData = [{ "name": "Accio","description": "Summons objects"}, { "name": "Aguamenti", "description": "Summons water" }];

        sandbox.stub(axios, "get").resolves(Promise.resolve({ status: 200, data: expectedData}));

        return spellService.getSpells().then(result => {
            assert.lengthOf(result, 2);
        })

    })
})

