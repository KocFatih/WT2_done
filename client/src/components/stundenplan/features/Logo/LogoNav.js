import React, { Component } from 'react'
import kairos from './Kairos.png'
import './logoNav.css'


//-----Sarah---------
export class LogoNav extends Component {

    handleClick = () => {
         
         if( document.getElementById('kairos').className == "spot")
             document.getElementById('kairos').className = "newspot";
         else
             document.getElementById('kairos').className = "spot";
    }

    render() {
        return (
            <div>
                <div id="kairos" className='spot'><img src={kairos} alt='LOGO' onClick={this.handleClick}/></div>    
                <div className='spotHighlight' onClick={this.handleClick}><p><b>Your EZ' better study Planner</b></p></div>           
            </div>
        )
    }
}

export default LogoNav
