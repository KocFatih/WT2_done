import React from 'react';
import './styles.css'
import { Button } from 'react-bootstrap';


//---Sarah--------
class Login extends React.PureComponent{
    state = {
        email: null,
    }

    loginScreen = (email, password) => {
        this.props.handleLogin(email, password);
    }

    tryLogin(content, email) {

        //wenn login gescheitert
        if(content == null){
            console.log("falsch");
            document.getElementById("wrongData").className = "";
            document.getElementById("password").value= "";
        }
        //wenn login erfolgreich
        else{
            document.getElementById("wrongData").className = "notFailed";
            document.getElementById("logScreen1").className = "logoutScreen1";
            document.getElementById("logScreen2").className = "logoutScreen2";
            document.getElementById("logoutScreen").className = "logoutScreenEnabled";
            this.setState({email: email});
            console.log("logged in");
            console.log(email);
        }

    }

    logout= () =>{;
        window.location.reload();
    }

    render() {
        return (
            <div>
                <div className='neutral' >
                    <div id="logScreen1" className="elements">
                        <i id="wrongData" className="notFailed">Falsche Daten eingegeben!</i>
                        <label>
                            Email adress<br />
                            <input type="text" id="email" placeholder="Enter email" />
                        </label>
                    </div>
                    <div id="logScreen2" className="elements">
                        <label>
                            Password<br />
                            <input type="password" id="password" placeholder="Password" />
                        </label>
                        <Button variant="primary" type="submit" onClick={() => this.loginScreen(document.getElementById('email').value, document.getElementById('password').value)}>Anmelden</Button>
                    </div>

                    <div id="logoutScreen" className="logoutScreen">
                        <label>
                            <a>Willkommen {this.state.email + " "} </a>
                            <Button variant="primary" type="submit" onClick={this.logout} >Abmelden</Button>
                        </label>
                    </div>

                </div>

                
            </div>
            );
        }
      }
      
      export default Login;