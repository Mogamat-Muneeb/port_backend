const express = require('express')
const projectRoutes = require('./routes/projectRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send({msg: "welcome to muneeb's backend"})
})

app.use('/projects',projectRoutes);
app.use('/testimonials',testimonialRoutes);

// app.listen(5000)


const port = process.env. PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));