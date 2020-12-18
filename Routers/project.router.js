const { Router } = require('express'); 
const{ projectDBController} = require('../controllers/project.controller');

const projectRouter = new Router();


projectRouter.get('/', projectDBController.getProjects);
projectRouter.post('/', projectDBController.createProject);


module.exports = { projectRouter };

