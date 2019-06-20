
//--------Express Tests---------------
var express = require('express')
var app = express()
const mongoose = require('mongoose');



//---Jan------
var User = require('./modules/user');//Tabellen erzeugung
var Feacher = require('./modules/feacher');//Tabellen erzeugung
var SemesterGruppe = require('./modules/semesterGruppe');//Tabellen erzeugung

const database = 'mongodb+srv://wt2:wt2@cluster1-mih9y.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(database, {useNewUrlParser: true})
.then(()=> console.log('DB connected'))
.catch(err => console.log(err))


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
var user; //eingeloggte benutzer wird eingebunden


//---Julia---------
//Go Home
app.get('/default', function (req, res, next) {

  SemesterGruppe.find().exec(function(err, fach) {
    //console.log(fach);
    res.json(fach);
  });

})


//---------Andre---------
app.patch('/safeChanges/', function (req, res, next) {

  console.log(req.body)
  //console.log(user)
  User.findOneAndUpdate({email: user.email}, {$set:{userPlan: req.body}}, {new: true}, (err, doc) =>{

  if(err) console.log("fehlgeschlagen");

  });

  res.json(user.userPlan); 
})
/*
app.patch('/safeChanges/:id', function (req, res) {
  var updateObject = req.body;
  var id = req.params.id;
  db.users.update({_id  : ObjectId(id)}, {$set: updateObject});
});*/



//-------Andre----------
app.post('/defaultPlan', async function (req, res, next) {
  
  var query  = SemesterGruppe.where({ sid: req.body.id});
  var semesterGruppe = await query.findOne();

  //console.log(semesterGruppe);;

  if(semesterGruppe != null){
    for(var i=0; i<5; i++){
      for(var k=0; k<12; k++){
        var newQuery = Feacher.where({fid: semesterGruppe.feacher[i][k].id})
        var fach = await newQuery.findOne();
        semesterGruppe.feacher[i][k]= {fach: fach.bezeichnung, id: fach.fid};
        
      }
    }
    return res.json(semesterGruppe);
  }
  else{
    return res.json(null);
  }
  
})

//---Julia-----
app.post('/login', async function (req, res, next) {

  
  var query  = User.where({ email: req.body.email, password: req.body.password});
  user = await query.findOne();
  
  console.log(user);
  if(user != null){
    for(var i=0; i<user.userPlan.length; i++){
      for(var k=0; k<user.userPlan[i].length; k++){
        var newQuery = Feacher.where({fid: user.userPlan[i][k]})
        var fach = await newQuery.findOne();
        user.userPlan[i][k]= {fach: fach.bezeichnung, id: fach.fid};
      }
    }
    
  }
  else{
    return res.json(null);
  }
  res.json(user);
})



//-----Jan------
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log('Server is running on PORT:',PORT);
});





//--------Serverseitige Test/Weggeworfen/Daten-Müll die im laufe der Versuche entstanden sind------------------
  //var feacher = new Feacher({fid: '0', bezeichnung: '-', time: null})
  //var feacher = new Feacher({fid: '1', bezeichnung: 'Java 2', time: [{day: '1', hour: '1'},{day: '1', hour: '2'},{day: '1', hour: '3'},{day: '1', hour: '4'},{day: '1', hour: '5'},{day: '1', hour: '6'},{day: '1', hour: '7'},{day: '1', hour: '8'},{day: '1', hour: '9'},{day: '1', hour: '10'},{day: '1', hour: '11'},,{day: '1', hour: '12'}], user: null, semesterGruppe: null});
  //var feacher = new Feacher({fid: '2', bezeichnung: 'Elektrotechnik', time: [{day: '2', hour: '1'},{day: '2', hour: '2'},{day: '2', hour: '3'},{day: '2', hour: '4'},{day: '2', hour: '5'},{day: '2', hour: '6'},{day: '2', hour: '7'},{day: '2', hour: '8'},{day: '2', hour: '9'},{day: '2', hour: '10'},{day: '2', hour: '11'},,{day: '2', hour: '12'}], user: null, semesterGruppe: null});
  //var feacher = new Feacher({fid: '3', bezeichnung: 'Mathe 2', time: [{day: '3', hour: '1'},{day: '3', hour: '2'},{day: '3', hour: '3'},{day: '3', hour: '4'},{day: '3', hour: '5'},{day: '3', hour: '6'},{day: '3', hour: '7'},{day: '3', hour: '8'},{day: '3', hour: '9'},{day: '3', hour: '10'},{day: '3', hour: '11'},,{day: '3', hour: '12'}], user: null, semesterGruppe: null});
  //var feacher = new Feacher({fid: '4', bezeichnung: 'IT Sicherheit', time: [{day: '4', hour: '1'},{day: '4', hour: '2'},{day: '4', hour: '3'},{day: '4', hour: '4'},{day: '4', hour: '5'},{day: '4', hour: '6'},{day: '4', hour: '7'},{day: '4', hour: '8'},{day: '4', hour: '9'},{day: '4', hour: '10'},{day: '4', hour: '11'},,{day: '4', hour: '12'}], user: null, semesterGruppe: null});
  //var feacher = new Feacher({fid: '5', bezeichnung: 'Datenbanken', time: [{day: '5', hour: '1'},{day: '5', hour: '2'},{day: '5', hour: '3'},{day: '5', hour: '4'},{day: '5', hour: '5'},{day: '5', hour: '6'},{day: '5', hour: '7'},{day: '5', hour: '8'},{day: '5', hour: '9'},{day: '5', hour: '10'},{day: '5', hour: '11'},,{day: '5', hour: '12'}], user: null, semesterGruppe: null});
  
  //var semesterGruppe = new SemesterGruppe({sid: 2, bezeichnung: "Elektrotechnik"});

  //var user = new User({email: 'wt2@hs-bochum.de', password: '654321', userPlan: [[{id: '1'},{id: '1'},{id: '2'},{id: '2'},{id: '1'},{id: '0'},{id: '1'},{id: '2'},{id: '1'},{id: '0'},{id: '0'},{id: '0'}],[{id: '0'},{id: '1'},{id: '1'},{id: '2'},{id: '2'},{id: '2'},{id: '1'},{id: '1'},{id: '2'},{id: '1'},{id: '0'},{id: '0'}],[{id: '3'},{id: '4'},{id: '2'},{id: '5'},{id: '5'},{id: '5'},{id: '0'},{id: '4'},{id: '4'},{id: '3'},{id: '3'},{id: '1'}],[{id: '5'},{id: '5'},{id: '4'},{id: '4'},{id: '3'},{id: '3'},{id: '2'},{id: '2'},{id: '2'},{id: '2'},{id: '2'},{id: '2'}],[{id: '2'},{id: '2'},{id: '2'},{id: '2'},{id: '2'},{id: '2'},{id: '4'},{id: '4'},{id: '5'},{id: '5'},{id: '0'},{id: '0'}]]});

  //var user = new User({email: 'test@hs-bochum.de', password: '654321'});
  //user.save().then(() => console.log('This is done!')).catch(err => console.log(err));


  /*  //Umgang mit Schema
  var Schema = mongoose.Schema;//referenz aufs Schema Object in mongoose

  var userDataSchema = new Schema({//das ist jetzt nur ein Schema der Tabelle. Ein JSON-Objekt wird dem Konstructor des Schemas geschickt.
    title: {type: String, required: true}, //jetzt ist es erforderlich das ein title angegeben wird. Also Not NULL
    content: String, //man kann so ganz einfach typ angaben machen.
    author: String,  //sind aber spezielle bedingungen nötig, so muss man diese per {} zu js umwandeln.

  }, {});

  var UserData = mongoose.model('UserData', userDataSchema);//hiermit wird jetzt die richtige Tabelle(Collection) erzeugt! Hiermit kann man jetzt DatenObjekte erzeugen, und auch hier in UserData reinspeichern.Diese werden auto ins DB übertragen.

  //innerhalb der MW
  var data = new UserData({title: 'blabla'});
  data.save().then(() => console.log('This is done!'));

*/

  /*
  SemesterGruppe.findOneAndUpdate({sid: 2}, {$set:{feacher: [[{id: 4},{id: 5},{id: 3},{id: 0},{id: 5},{id: 2},{id: 0},{id: 0},{id: 1},{id: 3},{id: 2},{id: 0}],[{id: 0},{id: 4},{id: 2},{id: 0},{id: 5},{id: 5},{id: 4},{id: 4},{id: 2},{id: 2},{id: 5},{id: 5}],[{id: 1},{id: 1},{id: 2},{id: 1},{id: 3},{id: 2},{id: 0},{id: 3},{id: 0},{id: 4},{id: 5},{id: 4}],[{id: 4},{id: 0},{id: 5},{id: 3},{id: 3},{id: 2},{id: 1},{id: 2},{id: 0},{id: 1},{id: 3},{id: 3}],[{id: 5},{id: 4},{id: 3},{id: 0},{id: 0},{id: 2},{id: 3},{id: 0},{id: 0},{id: 3},{id: 3},{id: 0}]] }}, {new: true}, (err, doc) =>{
    if (err) {
      console.log("Update fehlgeschlagen!");
    }

    console.log(doc);
  });

    SemesterGruppe.findOneAndUpdate({sid: 3}, {$set:{feacher: [[{id: 2},{id: 3},{id: 4},{id: 0},{id: 5},{id: 2},{id: 0},{id: 3},{id: 1},{id: 3},{id: 2},{id: 0}],[{id: 5},{id: 4},{id: 1},{id: 0},{id: 0},{id: 5},{id: 4},{id: 4},{id: 2},{id: 2},{id: 5},{id: 5}],[{id: 4},{id: 1},{id: 2},{id: 1},{id: 1},{id: 2},{id: 0},{id: 3},{id: 0},{id: 4},{id: 0},{id: 4}],[{id: 0},{id: 0},{id: 4},{id: 2},{id: 3},{id: 1},{id: 1},{id: 2},{id: 0},{id: 2},{id: 3},{id: 3}],[{id: 3},{id: 4},{id: 3},{id: 4},{id: 0},{id: 2},{id: 5},{id: 0},{id: 0},{id: 3},{id: 3},{id: 0}]] }}, {new: true}, (err, doc) =>{
    if (err) {
      console.log("Update fehlgeschlagen!");
    }

    console.log(doc);
  });
  */

//----------------------
/*
const express = require('express');
//var bodyParser = require("body-parser");
const app = express();

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.get('/lala', (req, res) => {
    const customers =[  //normalerweise kämme hier jetzt die DB hin
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Andre', lastName: 'Hoffmann'},
        {id: 3, firstName: 'Mr', lastName: 'Me'}
    ];
    
    res.json(customers); //der oben erstellte json "customers wird zurückgeschickt"
});
*/
/*app.post('/defaultPlan', function(req, res) {
    //Get sent data.
    const feacher = [{ids: "req.body.ids", name: "req.body"}];
    //console.log(fach)
    //Do a MySQL query.
    //var query = connection.query('INSERT INTO users SET ?', user, function(err, result) {
      //Neat!
    //});
    
    res.json(feacher);
});*/
/*
app.post('/defaultPlan', function(request,response){
    var user_name=req.body.ids;
    var password=req.body.name;
    console.log("User name = "+user_name+", password is "+password);
    //const feacher = [{ids: request.body.ids}];
    //res.json(feacher);
});

const port = 9000;
app.listen(port,() => console.log(`Server started on port ${port}`)); //Das ist nur die Terminal ausgabe

*/

//----------MongoDB mit Mongoos Anbindung----------------------------------
/*
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 9000;

const config = require('./db');
const UserRoute = require('./UserRoute');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', UserRoute);

app.listen(PORT, () => {
  console.log('Server is running on PORT:',PORT);
});
*/