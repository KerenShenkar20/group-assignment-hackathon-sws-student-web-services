const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const projectManagerRouter = require("./Routers/projectManager.router");
const projectRouter = require("./Routers/project.router");
//const volunteerRouter = require("./Routers/volunteer.router");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.set('Content-Type', 'application/json');
    next();
});

app.use('/api/projectsManagers', projectManagerRouter.projectManagerRouter);   
app.use('/api/projects', projectRouter.projectRouter);
//app.use('/api/volunteers', volunteerRouter.volunteerRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
});

app.listen(port, () => console.log('Express server is running on port ', port));
