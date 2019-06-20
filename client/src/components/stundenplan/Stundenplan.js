import React, { Component } from 'react';
//import './App.css';
import Table from "./table";
import "bootstrap/dist/css/bootstrap.css";
import {Button} from "react-bootstrap";
import Navigation from './features/Navigation/Navigation';
import Progressbar from './Progressbar';



//----unbedingt auch die readme lesen------
class Stundenplan extends Component {
  state = {
    feacher: [//für die verschiedenen zur auswahl stehenden Fächer. Dummy Daten die eigentlich übers componentWillMount eingebunden werden.
      { value: '-', id: '0'},
      { value: 'Informatik 4.Sem', id: '1'},
      { value: 'Elektrotechnik 2.Sem', id: '2'},
      { value: 'Architektur 2.Sem', id: '3'},
      { value: 'BWL 6.Sem', id: '4' },
    ], 

    //states getrennt um kleinere Packete zu haben
    montag: [
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]}
    ],
    dienstag: [
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]}
    ],
    mittwoch: [
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]}
    ],
    donnerstag: [
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]}
    ],
    freitag: [
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
      {stunde:[{fach:'-', id: '0'}]},
    ],

  
    //----Benutzer Profil-Array Erzeugung 5x12Felder---------
    Profil: [
      ['0','0','0','0','0','0','0','0','0','0','0','0'],//montag
      ['0','0','0','0','0','0','0','0','0','0','0','0'],//montag
      ['0','0','0','0','0','0','0','0','0','0','0','0'],//montag
      ['0','0','0','0','0','0','0','0','0','0','0','0'],//montag
      ['0','0','0','0','0','0','0','0','0','0','0','0']//montag  
    ],

    //Benutzer-Profil des Nutzers
    Benutzer: {name: "-", lvl: [0,0], bild: "-", email: "-", password: "-", defaultPlan: "-"}, //lvl: index0=level index1=prozent
    LoggedIn: false,
    progressValue: 0, //fürs Progressbar

  };


  //----Fatih-------
  componentWillMount() {
    //console.log(this.state.feacher)
    fetch('/default')
    .then(res => res.json()) 
    .then(feacher => this.setState({feacher}))
    //.then(feacher => this.setState({feacher}, () => console.log('Customers fetched...', this.state.feacher)));
  }

  //---Jan---------
  //anpassen des Persönlichen Profiles
  handleProfile = (day, hour, id) => {          //day=0-4 hour=0-11
    this.state.Profil[day][hour] = id
  };

  //-----Andre-----
  //  Profile->DB
  handleSafeChanges = () => {
    console.log(this.state.Profil);
    //console.log("gespeichert")
    //Änderungen werden im DB abgelegt, login daten müssen auf server bereits liegen
    
    //const Profile = {Profile: this.state.Profil, defaultPlan: this.state.Benutzer.defaultPlan}
    //console.log(this.state.Profil);
    if(this.state.LoggedIn == true){
    (async () => {
      const rawResponse = await fetch('/safeChanges', {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.Profil)
      });
      const content = await rawResponse.body
    
      console.log(content);
    })();
    console.log("Changes Safed")
    
    }
    else{console.log("not logged in")};
  }

  //----Julia------
  //userdaten auf tabelle führen
  loadPlan_fromUser = (plan) => {
      
      var montag = this.state.montag;
      for(var i=0; i<plan.userPlan[0].length; i++)
        montag[i].stunde.unshift(plan.userPlan[0][i]);

      var dienstag = this.state.dienstag;
      for(var i=0; i<plan.userPlan[1].length; i++)
        dienstag[i].stunde.unshift(plan.userPlan[1][i]);

      var mittwoch = this.state.mittwoch;
      for(var i=0; i<plan.userPlan[2].length; i++)
        mittwoch[i].stunde.unshift(plan.userPlan[2][i]);
  
      var donnerstag = this.state.donnerstag;
      for(var i=0; i<plan.userPlan[3].length; i++)
        donnerstag[i].stunde.unshift(plan.userPlan[3][i]);

      var freitag = this.state.freitag;
      for(var i=0; i<plan.userPlan[4].length; i++)
        freitag[i].stunde.unshift(plan.userPlan[4][i]);
    

      this.setState(montag);
      this.setState(dienstag);
      this.setState(mittwoch);
      this.setState(donnerstag);
      this.setState(freitag);

  }

  //----Andre-------
  //default daten auf tabelle führen
  loadPlan_fromDefault = (plan) => {  
    console.log(plan);

    var profil = this.state.Profil;
    var montag = this.state.montag;
    for(var i=0; i<plan.feacher[0].length; i++){
      montag[i].stunde.unshift(plan.feacher[0][i]);
      profil[0][i] = plan.feacher[0][i].id;
    }

    var dienstag = this.state.dienstag;
    for(var i=0; i<plan.feacher[1].length; i++){
      dienstag[i].stunde.unshift(plan.feacher[1][i]);
      profil[1][i] = plan.feacher[1][i].id;
    }

    var mittwoch = this.state.mittwoch;
    for(var i=0; i<plan.feacher[2].length; i++){
      mittwoch[i].stunde.unshift(plan.feacher[2][i]);
      profil[2][i] = plan.feacher[2][i].id;
    }

    var donnerstag = this.state.donnerstag;
    for(var i=0; i<plan.feacher[3].length; i++){
      donnerstag[i].stunde.unshift(plan.feacher[3][i]);
      profil[3][i] = plan.feacher[3][i].id;
    }

    var freitag = this.state.freitag;
    for(var i=0; i<plan.feacher[4].length; i++){
      freitag[i].stunde.unshift(plan.feacher[4][i]);
      profil[4][i] = plan.feacher[4][i].id;
    }

    this.setState(montag);
    this.setState(dienstag);
    this.setState(mittwoch);
    this.setState(donnerstag);
    this.setState(freitag);
    this.setState({Profil: profil});
    console.log(this.state.Profil);

  }

  //--Andre---------
  handleDefaultPlan = (id) => {
    //console.log(id)   
    
    this.state.Benutzer.defaultPlan = id;
    
    (async () => {
      const rawResponse = await fetch('/defaultPlan', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id}) 
      });
      const content = await rawResponse.json();
    
      console.log(content);

      if(content != null){

        this.loadPlan_fromDefault(content);//stundenplan schreiben
      }

    })();
    console.log(this.state.montag);
    console.log(this.state.dienstag);
    console.log(this.state.mittwoch);
    console.log(this.state.donnerstag);
    console.log(this.state.freitag);
    
  }

  //---Julia----------
  handleLogin = (email, password) => {
    console.log("login versuch");  

    var benutzer = this.state.Benutzer;
    benutzer.email = email;
    benutzer.password = password;

    this.setState({Benutzer: benutzer});
    
   (async () => {

      const rawResponse = await fetch('/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.Benutzer)
      });
      var content = await rawResponse.json();

      //console.log(content);
      
      if(content != null){

        var benutzer = this.state.Benutzer;
        benutzer.email = content.email;
        benutzer.password = content.password;
        benutzer.name = content.name;
        benutzer.gruppe = content.gruppe;
        benutzer.lvl = content.lvl;
        benutzer.bild = content.bild;

        this.setState({Benutzer: benutzer});
        this.setState({LoggedIn: true})

        
        //user-profil befüllen:
        console.log(content.userPlan);
        for(var i=0; i<content.userPlan.length; i++){
          for(var k=0; k<content.userPlan[i].length; k++){
            this.handleProfile(i, k, content.userPlan[i][k].id)
          }
        }
        
        this.loadPlan_fromUser(content);//stundenplan schreiben
      }
      
      this.refs.child.refs.child.tryLogin(content, this.state.Benutzer.email) // Stundenplan->Navigation->Login->tryLogin
      

    })();
    
  }

  //---Sarah---
  progressIncrease = () => {
    /* zum abspeichern fürs benutzer für spätere Zwecke
    var benutzer = this.state.Benutzer;
    benutzer.lvl[1] += 5;
    this.setState({Benutzer: benutzer});
    */
    
    var progressValue = this.state.progressValue+5;
    this.setState({progressValue});
  }

  /*
  handleInsert = (hour, day, modul) => {  //ursprüngliche Funktion zum hinzufügen von Elementen(veraltet)
    var feacher = this.state.feacher
    feacher[hour].splice(day, 1, modul);
    this.setState({feacher: feacher})
  };

  handleClear = (hour, day) => {          //ursprüngliche Funktion zum löschen von Elementen(veraltet)
    var feacher = this.state.feacher
    feacher[hour].splice(day, 1, "");
    this.setState({feacher: feacher})
  };
  */


  render(){

    //this.handleProfile(0,0,2);
    //this.state.Profil[0].montag[0].id = 'erfolgreich'
    
    return (
      <React.Fragment>
        <Navigation        //------Sarah-----------   
          onChange={(e) => this.props.handleDefaultPlan(e.target.value)} //ref
          handleDefaultPlan = {this.handleDefaultPlan} //ref
          style ={{position: "absolute", left: "10em"}}
          //name ="venue[country_id]"
          feacher = {this.state.feacher}
          handleSafeChanges = {this.handleSafeChanges} //ref
          handleLogin = {this.handleLogin}
          ref="child" //nötig um parent -> child zugriff durchzuführen
        />
        {/*<button onClick={this.onClick.bind(this)}>Click</button>*/}

        <Table      //---------Jan---------
          montag={this.state.montag}
          dienstag={this.state.dienstag}
          mittwoch={this.state.mittwoch}
          donnerstag={this.state.donnerstag}
          freitag={this.state.freitag}
          handleProfile= {this.handleProfile}
        />

        {/*----Sarah------*/}
        <Progressbar value={this.state.progressValue}/>  {/* beim benutzer value={this.state.Benutzer.lvl[1] für spätere Zwecke*/}
        <Button onClick={this.progressIncrease}>increase</Button>
        
        {/*<FachSelect     //veraltet
          onInsert= {this.handleInsert}
          onClear = {this.handleClear}
        />*/}
      </React.Fragment>
    );
  }
}

export default Stundenplan;