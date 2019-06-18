var mongoose = require('mongoose');
var Schema = mongoose.Schema;//referenz aufs Schema Object in mongoose
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: String,
    lastName: String,
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    userPlan: [[String]], //doppeltes Array
    defaultPlan: [[String]]
});

schema.plugin(mongooseUniqueValidator);//Schema wird ergänzt auf unique


module.exports = mongoose.model('user', schema);//hiermit wird jetzt die richtige Tabelle(Collection) erzeugt! Hiermit kann man jetzt DatenObjekte erzeugen, und auch hier in UserData reinspeichern.Diese werden auto ins DB übertragen.