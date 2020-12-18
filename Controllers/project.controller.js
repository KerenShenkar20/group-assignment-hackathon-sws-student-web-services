const { query } = require('express');
const { get } = require('http');
const Project = require('../Models/project');

let projectId = 100;
let data;

exports.projectDBController = {

    getProjects(req, res) {


        if (req.query) {

            const query = {
                programmingLanguage: `${req.body.programmingLanguage}`,
                programmingLevel: `${req.body.programmingLevel}`,
                role: `${req.body.role}`
            }

            Project.find(query)
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

    },

    createProject(req, res) {
        ++projectId;

        const project = new Project({ 
            "id": projectId, 
            "name":req.body.name, 
            "volunteersId": req.body,volunteersId, 
            "password": req.body.password, 
            "description": req.body.description
    })


        project.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    }
}