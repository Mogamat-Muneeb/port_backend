const express = require('express');
const app = express.Router();
// const fixArrayId = require('../helpers')

let projects = [
    {"title":"The Blog",
    "id":1,
    "img":"https://i.postimg.cc/dt2Qkdw1/Screenshot-22.png",
    "github":"https://github.com/Mullins69/blogplatform_backend",
    "link":"https://the-blog3.web.app/#/",
    "lang":"Vue.JS Node.JS MongoDB Bootstrap",
    "desc":"A Blog Platform. A Group Project. "
    },
    // {"title":"E-Commerce Website",
    // "id":1,
    // "img":"https://i.postimg.cc/N086frVf/Screenshot-41.png",
    // "github":"https://github.com/Mogamat-Muneeb/online-store",
    // "link":"https://dinghystore.link.app",
    // "lang":"HTML/CSS",
    // "desc":"An online store that sells one product."
    // },
    {"title":"JS Calculator",
    "id":2,
    "img":"https://i.postimg.cc/FsW-qgkZd/Screenshot-49.png",
    "github":"https://github.com/Mogamat-Muneeb/calculator_2",
    "link":"https://jscalculator2.netlify.app",
    "lang":"JS HTML CSS",
    "desc":"A basic calculator with full functionality."
    },
    // {"title":"Reaction Game",
    // "id":4,
    // "img":"https://i.postimg.cc/rFf6nP8p/Screenshot-50.png",
    // "github":"https://github.com/Mogamat-Muneeb/reaction-time-vue-",
    // "link":"https://muneebs-reacting-timer.link.app/",
    // "lang":"Vue.JS",
    // "desc":"Mini game to test eye coordination. "
    // },
    // {"title":"Davids Driving School",
    // "id":2,"img":"https://i.postimg.cc/pdcR6BTr/Screenshot-42.png", 
    // "github":"https://github.com/Mogamat-Muneeb/davids_drivingschool",
    // "link":"https://davids-drivng-school.link.app",
    // "lang":"HTML CSS",
    // "desc":"A brochure site that advertises a driving school."
    // },
    //  {"title":"P.O.S-Project",
    //  "id":5,
    //  "img":"https://i.postimg.cc/mk9zSyr9/Screenshot-16.png",
    //  "github":"https://github.com/Mogamat-Muneeb/POS_Project",
    //  "link":"https://neebspos.link.app/",
    //  "lang":"JS",
    //  "desc":"A typical online store."
    // },
     {"title":"Temp Convertor",
     "id":3,"img":"https://i.postimg.cc/fRVwYBJj/Screenshot-37.png",
     "github":"https://github.com/Mogamat-Muneeb/TEMPERATURE-CONVERTOR",
     "link":"https://calcutemp.netlify.app",
     "lang":"JS HTML CSS",
     "desc":"Converts from Celsius to Fahrenheit. "
    },
    {"title":"Booking Website",
    "id":4,
    "img":"https://i.postimg.cc/sxt8Wz7r/Screenshot-1.png",
    "github":"https://github.com/Mogamat-Muneeb/BARBERSHOP-FRONTEND",
    "link":"https://the-urbanshave-barbershop.web.app/",
    "lang":"Vue.JS Node.JS MongoDB",
    "desc":"A brochure site with booking section. "
    },
    // {"title":"Point Of Sale",
    // "id":4,
    // "img":"https://i.postimg.cc/j2N5338X/Screenshot-53.png",
    // "github":"https://github.com/Mogamat-Muneeb/surfstore-front",
    // "link":"https://surfstore-proj.web.app/",
    // "lang":"Vue.JS/Node.JS/MongoDB",
    // "desc":"Simple Point Of Sale. "
    // },
    {"title":"Mobile App Design",
    "id":5,
    "img":"https://i.postimg.cc/fRgxrdPM/Screenshot-41.png",
    "github":"https://github.com/Mogamat-Muneeb/TASKIFY",
    "link":"https://www.figma.com/file/Sg5yXsUeMPvL79n7w5oC67/Fitness-App?node-id=0%3A1",
    "lang":"Figma",
    "desc":"Basic mobile app design."
    },
    {"title":"Realtime Digital Clock",
    "id":6,
    "img":"https://i.postimg.cc/NG77Fw1J/Screenshot-2022-11-27-at-00-15-12.png",
    "github":"https://github.com/Mogamat-Muneeb/digital-clock",
    "link":"https://digitalclock-ruddy.vercel.app/",
    "lang":"VueJs Tailwind",
    "desc":"Simple realtime digital clock."
    },
    // {"title":"Fun Note",
    // "id":7,
    // "img":"https://i.postimg.cc/qvLGgWhf/fun-App.png",
    // "github":"https://github.com/Mogamat-Muneeb/funnotesapp",
    // "link":"https://funnotesapp.web.app/",
    // "lang":"React Tailwind Firebase ",
    // "desc":"Simple notes app concept."
    // },
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
    let {title ,img ,github ,link, lang , desc} = req.body;
    if (!title || !img || !github || !link || !lang || !desc)
     res.status(400).send({msg: 'not all info was sent'});
let newProject = {
    id:projects.length + 1,
    title,
    img,
    github,
    link,
    lang,
    desc,
   
};
projects.push(newProject);
res.send(newProject);
});

//update a project
app.put('/:id',(req,res) =>{
    let project = projects.find((project) => project.id == req.params.id);
    if (!project) res.status(404).send({msg: 'projects not found'});
    let (title,img, github,link,lang,desc) = req.body;

    
        if (title) project. title = title;
        if (img) project.img = img;
        if (github) project.github = github;
        if (link) project.link = link;
        if (lang) project.lang = lang;
        if (desc) project.desc = desc;
        res.send(project);  
});


//delete
// app.delete('/:id',(req,res) => { 
//  projects = projects.filter((project) => project.id != req.params.id);
//  fixArrayId(projects);
//  res.send({msg: 'item removed'});
// });




module.exports = app