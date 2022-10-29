const express = require('express');
const app = express.Router();
const fixArrayId = require('../helpers')

let resumes = [
    {
    "id":1,
    "occupation":"Volunteering",
    "place":"Madrassa Tul Sadaaqat",
    "description":"Started tutoring and helping out at Muslim school, teaching kids how to recite the Quran and fundamentals of Islam and tutoring mathematics to grade 9 learners.",
    "date":"Jan 2020 - present"
    },
    {
    "id":2,
    "occupation":"Frontend Developer & Ui/Ux Designer",
    "place":"Lc Studio",
    "description":"An internship where the fundamentals of working in actual web apps teams is put into practice. As well as upskilling myself in coding.",
    "date":"Feb 2022 - June 2022"
    },
    {
    "id":3,
    "occupation":"Frontend Developer",
    "place":"Mandelo Webwiser",
    "description":"Building and working with E-commerce sites.Builidng complex functionalities to make user experience better when browsing the specific site.",
    "date":"June 2022 - Present"
    },
    {
    "id":4,
    "occupation":"High School",
    "place":"Voortrekker High School",
    "description":"I started and matriculated at Voortrekker High School in Kenilworth. I was part of the RCL leadership team from Gr.10 to Gr.12 and played First-Team rugby since Gr.10 as a Scrumhalf. As well as being the Deputy Head Boy in Matric.",
    "date":"Jan 2016 - Dec 2020"
    },
    {
    "id":5,
    "occupation":"Fandamentals of Web Development",
    "place":"Life Choices Coding Academy",
    "description":"A Bootcamp program that provides you with the core fundamentals of Web Development, learning coding languages such as HTML, CSS, JavaScript, and more coding techniques. We taught interpersonal and self-development skills to take us further in life.",
    "date":"Sept 2021 - June 2022"
    },
    ];
        

//get all resumes
app.get('/',(req,res) => {
    res.send(resumes);
});
 

//get one resume
app.get('/:id',(req,res) => {
    const resume = resumes.find((resume) => resume.id == req.params.id);
    if (!resume) res.status(404).send({msg: 'resume not found'});
    res.send(resume);
})
//create a resume
app.post('/',(req,res) => {
    let {place,img ,email ,quote , relation } = req.body;
    if ( !place || !img || !email || !quote || !relation)
     res.status(400).send({msg: 'not all info was sent'});
let newresume = {
    id:resumes.length + 1,
    place,
    img,
    email,
    quote,
    relation,
   
};
resumes.push(newresume);
res.send(newresume);
});

//update a resume
app.put('/:id',(req,res) =>{
    let resume = resumes.find((resume) => resume.id == req.params.id);
    if (!resume) res.status(404).send({msg: 'resumes not found'});
    let (place,img, email,quote,relation) = req.body;

    
        if (place) resume.place = place;
        if (img) resume.img = img;
        if (email) resume.email = email;
        if (quote) resume.quote = quote;
        if (relation) resume.relation = relation;
        res.send(resume);  
});


//delete
app.delete('/:id',(req,res) => { 
 resumes = resumes.filter((resume) => resume.id != req.params.id);
 fixArrayId(resumes);
 res.send({msg: 'item removed'});
});


module.exports = app