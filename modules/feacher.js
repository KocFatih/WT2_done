var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');


//--Jan----
var schema = new Schema({
    fid: {type: String, required: true, unique: true},
    bezeichnung: {type: String, required: true},
    time: [{day: Number, hour: Number}],
    user: [{type: Schema.Types.ObjectId, ref: 'user'}],
    semesterGruppe: [{type: Schema.Types.ObjectId, ref: 'semesterGruppe'}],
});

schema.plugin(mongooseUniqueValidator);//Schema wird ergänzt auf unique


module.exports = mongoose.model('feacher', schema);