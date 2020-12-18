// Change the name of the file if needed

const projectManager = require('../Models/manager');
let projectManagerID = 500;
exports.projectManagerDBController = {
    getProjectManagers(req, res){         
        projectManager.findOne({})            
            .then(docs => {res.json(docs)})
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
           
    },

    addProjectManager(req, res){
        ++projectManagerID;
        const newProjectManager = new projectManager({
            "id":projectManagerID,
            "name": req.body.name,
            "volunteersId": req.body.volunteersId,
            "managerId":req.body.managerId,
            "password": req.body.password,
            "description": req.body.description
        })

        newProjectManager.save()
            .then(res.send('The new projact manager was saved'))
            .catch(err => console.log(`Error adding to DB: ${err}`));
    },


};
