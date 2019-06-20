var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');


//--Jan--
var schema = new Schema({
    sid: {type: Number, required: true, unique: true},
    bezeichnung: {type: String, required: true},
    feacher: [[{id: String}]],

});

schema.plugin(mongooseUniqueValidator);//Schema wird ergänzt auf unique


module.exports = mongoose.model('semesterGruppe', schema);