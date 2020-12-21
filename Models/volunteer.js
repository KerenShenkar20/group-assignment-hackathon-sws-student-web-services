const { Schema, model } = require('mongoose');

const volunteerSchema = new Schema({
    id: { type: Number, required: true },
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: { type: String, required: true},
    programmingLanguage: { type: Number, required: true},
    programmingLevel: { type: String, required: true},
    role: { type: String, required: true},
}, { collection: 'volunteer'});


const Volunteer = model('Volunteer', volunteerSchema);

module.exports = Volunteer;