const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle (Response22)')
})

app.listen(port, () => {
    console.log('Escutando porta desenv: ' + port )
})
