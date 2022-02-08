const express = require('express');
const app = express.Router()

let projects = [
    {"title":"E-Commerce Website","id":1,"img":"https://i.postimg.cc/8zSHpkLD/ecom1-3-11zon.png","links":{
        "github":"https://github.com/Mogamat-Muneeb/online-store",
        "netlify":"https://dinghystore.netlify.app","lang":"HTML/CSS"
    }},
    {"title":"JS Calculator","id":2,"img":"https://i.postimg.cc/pXKRzZ85/Screenshot-24.png","links":{
        "github":"https://github.com/Mogamat-Muneeb/calculator_2",
        "netlify":"https://jscalculator2.netlify.app","lang":"JS"
    }},
  
    {"title":"Reaction-Timer","id":4,"img":"https://i.postimg.cc/JhDc345h/Screenshot-11.png","links":{
        "github":"https://github.com/Mogamat-Muneeb/reaction-time-vue-",
        "netlify":"https://muneebs-reacting-timer.netlify.app/","lang":"VUE.JS"
    }},
    {"title":"Davids Driving School-Brochure Site","id":4,"img":"https://i.postimg.cc/J01kF1ZZ/Screenshot-10.png","links":{
        "github":"https://github.com/Mogamat-Muneeb/davids_drivingschool",
        "netlify":"https://davids-drivng-school.netlify.app","lang":"HTML/CSS"
    }},
     {"title":"P.O.S-Project","id":5,"img":"https://i.postimg.cc/mk9zSyr9/Screenshot-16.png","links":{
        "github":"https://github.com/Mogamat-Muneeb/POS_Project",
        "netlify":"https://neebspos.netlify.app/","lang":"JS"
    }},
     {"title":"Temp-Convertor","id":6,"img":"https://i.postimg.cc/V5yMyHh4/Screenshot-17.png","links":{
        "github":"https://github.com/Mogamat-Muneeb/TEMPERATURE-CONVERTOR",
        "netlify":"https://calcutemp.netlify.app/","lang":"JS"
    }}
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






module.exports = app