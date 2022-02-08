const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express.Router()

let projects = [
    {"title":"E-Commerce Website",
    "id":1,
    "img":"https://i.postimg.cc/8zSHpkLD/ecom1-3-11zon.png",
    "github":"https://github.com/Mogamat-Muneeb/online-store",
    "netlify":"https://dinghystore.netlify.app",
    "lang":"HTML/CSS",
    },
    {"title":"JS Calculator",
    "id":2,
    "img":"https://i.postimg.cc/pXKRzZ85/Screenshot-24.png",
    "github":"https://github.com/Mogamat-Muneeb/calculator_2",
    "netlify":"https://jscalculator2.netlify.app",
    "lang":"JS",
    },
  
    {"title":"Reaction-Timer",
    "id":4,
    "img":"https://i.postimg.cc/JhDc345h/Screenshot-11.png",
    "github":"https://github.com/Mogamat-Muneeb/reaction-time-vue-",
    "netlify":"https://muneebs-reacting-timer.netlify.app/",
    "lang":"VUE.JS",
    },
    {"title":"Davids Driving School-Brochure Site",
    "id":4,"img":"https://i.postimg.cc/J01kF1ZZ/Screenshot-10.png",
    "github":"https://github.com/Mogamat-Muneeb/davids_drivingschool",
    "netlify":"https://davids-drivng-school.netlify.app",
    "lang":"HTML/CSS"
    },
     {"title":"P.O.S-Project",
     "id":5,
     "img":"https://i.postimg.cc/mk9zSyr9/Screenshot-16.png",
     "github":"https://github.com/Mogamat-Muneeb/POS_Project",
     "netlify":"https://neebspos.netlify.app/",
     "lang":"JS",
    },
     {"title":"Temp-Convertor",
     "id":6,"img":"https://i.postimg.cc/V5yMyHh4/Screenshot-17.png",
     "github":"https://github.com/Mogamat-Muneeb/TEMPERATURE-CONVERTOR",
     "netlify":"https://calcutemp.netlify.app/",
     "lang":"JS",
    }
    ];
        

//get all projects
app.get('/',(req,res) => {
    res.send(projects);
});


//get one project
app.get('/:id',(req,res) => {
    const project = projects.find((project) => project.id == req.params.id);
    if (!project) res.status(404).send({msg: 'Project not found'});
    res.send(project);
})
//create a project
app.post('/',(req,res) => {
    let {title ,img ,github ,netlify, lang } = req.body;
    if (!title || !img || !github || !netlify || !lang)
     res.status(400).send({msg: 'not all info was sent'});
let newProject = {
    id:projects.length + 1,
    title,
    img,
    github,
    netlify,
    lang,
   
};
projects.push(newProject);
res.send(newProject);
});

//update a project
app.put('/:id',(req,res) =>{
    const project = projects.find((project) => project.id == req.params.id);
    if (!project) res.status(404).send({msg: 'projects not found'});

    updateProject = (project) =>{
        project.title = req.body.title;
        project.img = req.body.img;
        project.github = req.body.github;
        project.netlify = req.body.netlify;
        project.lang = req.body.title;
        res.send(project);
    }
    return updateProject(project);
});

        








//delete
app.delete('/:id',(req,res) => { })




module.exports = app