const express = require('express');
const app = express.Router();
// const fixArrayId = require('../helpers')

let testimonials = [
    {"title":"  Alex Sexwale",
    "id":6,
    "img":"https://i.postimg.cc/vB4NSG8D/alex-5-11zon.jpg",
    "email":"alexsexwale@gmail.com",
    "quote":"Muneeb is vigilant with his work. He continues to find ways to provide quality work and keep improving on his general knowledge.",
    "relation":"Lecturer"
    },
    {"title":" Mugammad Breda",
     "id":1,
     "img":"https://i.postimg.cc/FRkTVGGL/Breda-Y1-6-11zon.jpg",
     "email":"mugammadbreda1999@gmail.com",
     "quote":"This man is hardworking as well as efficient with his time. His a great guy to work with.",
     "relation":"Colleague"
    },
    {"title":" Yaaseen Davids",
    "id":2,
    "img":"https://i.postimg.cc/k5Bs7w0p/Yaseen3-9-11zon.jpg",
    "email":"yaaseendav@gmail.com",
    "quote":"Muneeb is a great designer and is always willing to help the next person.",
    "relation":"Colleague"
    },
    {"title":"  Na-aim Fredericks",
    "id":4,
    "img":"https://i.postimg.cc/8zkTLjVH/Na-aim3-7-11zon.jpg",
    "email":"fredericksnaaim13@gmail.com",
    "quote":"Muneeb is a very accountable guy when it comes to being a team player he is always flexible in his work, his ethical and loyal.",
    "relation":"Colleague"
    },
    {"title":" Ntombizanele Moni",
    "id":3,
    "img":"https://i.postimg.cc/TwbcD1Yj/Zanele3-10-11zon.jpg",
    "email":"zanelemoni4@gmail.com",
    "quote":"Muneeb is always willing to help. Always focused on the task at hand and is not easily distracted,HE LOVES HIS WORK.",
    "relation":"Colleague"
    },

    // {"title":" Simamkele January",
    // "id":5,
    // "img":"https://i.postimg.cc/dv7gPntj/Simamkele2-8-11zon.jpg",
    // "email":"simamkelejanjuary@gmail.com",
    // "quote":"Besides being an outstanding classmate, Muneeb is a free spirited young man who is always ready to help out where he is needed.",
    // "relation":"Colleague"
    // },
    {"title":" Aaliyah Jardien",
    "id":7,
    "img":"https://i.postimg.cc/D0yfp2Yc/aaliyah-6.jpg",
    "email":"aaliyahjar13@gmail.com",
    "quote":"Along with his driven and positive energy, Muneeb always brings his bright ideas to the table. He's a great team player & is delightful to work with.",
    "relation":"Colleague"
    },
    {"title":"Haniah Jardien",
    "id":8,
    "img":"https://i.postimg.cc/YSYkHbMG/h3.jpg",
    "email":"jardienhaniah@gmail.com",
    "quote":"This guy is ALWAYS willing to help no matter what.",
    "relation":"Colleague"
    }
    ];
        

//get all testimonials
app.get('/',(req,res) => {
    res.send(testimonials);
});
 

//get one testimonial
app.get('/:id',(req,res) => {
    const testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
    if (!testimonial) res.status(404).send({msg: 'testimonial not found'});
    res.send(testimonial);
})
//create a testimonial
app.post('/',(req,res) => {
    let {title,img ,email ,quote , relation } = req.body;
    if ( !title || !img || !email || !quote || !relation)
     res.status(400).send({msg: 'not all info was sent'});
let newtestimonial = {
    id:testimonials.length + 1,
    title,
    img,
    email,
    quote,
    relation,
   
};
testimonials.push(newtestimonial);
res.send(newtestimonial);
});

//update a testimonial
app.put('/:id',(req,res) =>{
    let testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
    if (!testimonial) res.status(404).send({msg: 'testimonials not found'});
    let (title,img, email,quote,relation) = req.body;

    
        if (title) testimonial.title = title;
        if (img) testimonial.img = img;
        if (email) testimonial.email = email;
        if (quote) testimonial.quote = quote;
        if (relation) testimonial.relation = relation;
        res.send(testimonial);  
});


//delete
// app.delete('/:id',(req,res) => { 
//  testimonials = testimonials.filter((testimonial) => testimonial.id != req.params.id);
//  fixArrayId(testimonials);
//  res.send({msg: 'item removed'});
// });


module.exports = app