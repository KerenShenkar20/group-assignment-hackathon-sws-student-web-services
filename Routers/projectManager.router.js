// Change the name of the file if needed

const { Router } = require('express');
const{ projectManagerDBController } = require('../controllers/projectManager.ctrl');

const projectManagerRouter = new Router(); 

projectManagerRouter.get('/', projectManagerDBController.getProjectManagers);
projectManagerRouter.post('/', projectManagerDBController.addProjectManager);

module.exports = { projectManagerRouter };
