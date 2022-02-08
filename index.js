const express = require('express')

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send({msg: "welcome to muneeb's backend"})
})

app.listen(5000)