import React from 'react';
import SelectBox from '../select-box';
import { Button } from 'react-bootstrap';
import Login from '../Login/Login';
import LogoNav from '../Logo/LogoNav';
import './styles.css'

//---Sarah-------
class Navigation extends React.PureComponent {




  render() {
    //console.log(this.props.items)
    return (
      <div>
        <ul className='select'>
          <li id="logo">
            <LogoNav/>
          </li>
          <li>
              <SelectBox  //----Fatih Koc (Nur die SelectBox)--------
                onChange={(e) => this.props.handleDefaultPlan(e.target.value)}
                handleDefaultPlan = {this.props.handleDefaultPlan}
                //name ="venue[country_id]"
                items = {this.props.feacher}
              />
          </li>
          <li id="button">
              <Button className="btn btn-primary btn-sm" onClick={this.switched} onClick={this.props.handleSafeChanges}>Save Changes</Button>
          </li>

          <li id="login">
              <Login 
                handleLogin = {this.props.handleLogin}
                handleDefaultPage = {this.props.handleDefaultPage}
                ref= "child" //Ein Referenzpunkt "child" auf Login wird gesetzt. Nötig damit der parent eine methode vom child ausführen kann.
              />
          </li>
        </ul>

      </div>
    );
  }
}

export default Navigation;
