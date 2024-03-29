const express = require('express')
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const contactRoutes = require('./routes/contactRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const app = express()

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({msg: "welcome to muneeb's backend"})
})

app.use('/projects',projectRoutes);
app.use('/testimonials',testimonialRoutes);
app.use('/contact',contactRoutes);
app.use('/resume',resumeRoutes);
// app.listen(5000)


const port = process.env. PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));