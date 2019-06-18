import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//veraltet und hat aktuell kein nutzen
class App extends Component {
  
  state = {
    feacher: [


     ["Stunde", "Zeit", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"],
     ["1", "Keine", "Ahnung", "", "Informatik", "ITS"],
     ["2", "Ahnung", "Keine", "", "", "ITS"],
     ["3", "ITS", "ITS", "Informatik", "Informatik", "ITS"],
     ["4", "ITS", "ITS", "Informatik", "Informatik", "ITS"],
     ["5", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["6", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["7", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["8", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["9", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["10", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["11", "Test", "Test", "Test", "Test", "Test", "Test"],
     ["12", "Test", "Test", "Test", "Test", "Test", "Test"]
    ]
  };

  handleInsert = (hour, day, modul) => {
    var feacher = this.state.feacher
    feacher[hour].splice(day, 1, modul);
    this.setState({feacher: feacher})
  };

  handleClear = (hour, day) => {
    var feacher = this.state.feacher
    feacher[hour].splice(day, 0, "");
    this.setState({feacher: feacher})
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Table feacher={this.state.feacher}/>
        <FachSelect onInsert= {this.handleInsert} onClear = {this.handleClear}/>
      </div>
    );
  }
}

export default App;
