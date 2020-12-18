const { Schema, model } = require('mongoose');
//const manager = require('./manager');

const projectsSchema = new Schema({
    id: { type: Number, required: true },
    name: {type: String, required: true},
    volunteersId: {type: Number, required: true},
    managerId: {type: Number, required: true},
    password: { type: String, required: true},
    description: { type: String, required: true},
    
}, { collection: 'projects'});


const Projects = model('Projects', projectsSchema);

module.exports = Projects;