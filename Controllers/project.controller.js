const { query } = require('express');
const { get } = require('http');
const Project = require('../Models/project');

let projectId = 100;
let data;

exports.projectDBController = {

    getProjects(req, res) {


        if (req.query) {

            Project.find({programmingLanguage:`${req.query.programmingLanguage}`, programmingLevel: { $gte: parseInt(`${req.query.programmingLevel}`) }, role: `${req.query.role}` })
                .then(docs => { res.json(docs) })
                .catch(err => console.log(`Error getting the data from DB: ${err}`));
        }

    },

    createProject(req, res) {
        ++projectId;

        const project = new Project({
            "id": projectId,
            "name": req.body.name,
            "volunteersId": req.body, volunteersId,
            "password": req.body.password,
            "description": req.body.description
        })


        project.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    }
}