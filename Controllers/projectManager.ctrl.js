// Change the name of the file if needed

const projectManager = require('../Models/manager');

let projectManagerID = 500;

exports.projectManagerDBController = {
    getProjectManagers(req, res){         
        projectManager.find({})            
            .then(docs => {res.json(docs)})
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
           
    },

    addProjectManager(req, res){

        console.log("something");
        ++projectManagerID;
        const newProjectManager = new projectManager({
            "id":projectManagerID,
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "email":req.body.email,
            "projectId": req.body.projectId,
        })

        newProjectManager.save()
            .then(res.send('The new projact manager was saved'))
            .catch(err => console.log(`Error adding to DB: ${err}`));
    },


};
