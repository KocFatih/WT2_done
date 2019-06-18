import React, { Component } from 'react';
//import './Customers.css';

/*müll*/
class Customers extends Component {

  constructor(){
    super();
    this.state = {
      customers: []
    }
  }

  /*(){
    fetch('/api/customers')
    .then(res => res.json()) //das resultat wird in res.json gemappt
    .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers))) //Die Daten werden in customers state abgelegt.
  }*/

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
            {this.state.customers.map(customer =>
              <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default Customers;