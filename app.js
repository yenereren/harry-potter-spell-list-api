const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const spellsController = require('./controllers/spells-controller/index');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/spells', async (req, res) => {
    const spells = await spellsController.getSpells();
    res.send(spells)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})