const express = require('express')
const projectRoutes = require('./routes/projectRoutes');
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send({msg: "welcome to muneeb's backend"})
})

app.use('/projects',projectRoutes);

app.listen(5000)