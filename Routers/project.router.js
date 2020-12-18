const { Router } = require('express'); 
const{ projectDBController} = require('./controllers/project.ctrl');

const projectRouter = new Router();


projectRouter.get('/', projectDBController.getProject);
projectRouter.post('/', projectDBController.createProject);



