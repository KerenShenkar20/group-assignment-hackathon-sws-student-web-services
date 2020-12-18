// Change the name of the file if needed
const { Schema, model } = require('mongoose');

const managerSchema = new Schema({
    id: { type: Number, required: true },
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: { type: String, required: true},
    projectId: { type: Number, required: true},
   
}, { collection: 'manager'});


const Manager = model('Manager', managerSchema);

module.exports = Manager;