// let a= 20;
// let b= 20;
// console.log(a+b);

//Require express module and create an app object
let express = require('express'); //give the module the same name to avoid confusion
let app = express();

let projects = {
    "data" : [
        {
            name: "Sleep Talk",
            info: "This installation invites the viewer to lie on a pillow. When the sensor inside the pillow senses that someone is lying down, it triggers a speaker embedded in the pillow to start playing a subtle sound, with two voices repeating “I (you) should let it go”."
        },
        {
            name: "Random Pollock Generator",
            info: "The interactive webpage generates a random painting in Jackson Pollock’s style with a sophisticated title for the artwork."
        },
        {
            name: "10 Things",
            info: "The video is based on my research about Mail-Order Brides."
        }
    ]
};

//Define routes
// app.get('/', (request, response)=> {
//     response.send("Home");
// });

//Serve content in the public folder
app.use('/', express.static('public'));

//Response with json file listed above
app.get('/projects', (request, response) => {
    response.json(projects);
});

app.get('/projects/:project', (request, response)=> {
    console.log(request.params.project);
    let user_project = request.params.project;
    let user_obj;
    for(let i=0;i<projects.data.length;i++){
        if(user_project == projects.data[i].name) {
            user_obj = projects.data[i];
        }
    }
    console.log(user_obj);
    if(user_obj) {
        response.json(user_obj);
    } else {
        response.json({status: "info not present"});
    }
    response.send("hi");
})

app.get('/subscribe', (reqiest,response)=> {
    response.send("Subscribe");
});

//Tell where the server should listen, 3000 is just the address
app.listen(3000, ()=> {
    console.log("app is listening at localhost:3000");
});
