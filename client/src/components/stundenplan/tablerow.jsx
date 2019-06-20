import React, { Component } from 'react';
import './all.css';


//---Person 2--------
class TableRow extends Component {


    /*this.props.tableRow.forEach(element => {
        <option>{0}</option>
    });*/

    render() {  
        const {std_montag, std_dienstag, std_mittwoch, std_donnerstag, std_freitag, stunde} = this.props

      
        
        var tmp_key = stunde //hier wird mit hilfe von stunde ein key für jedes tablerow generiert.
        const data1 = std_montag.stunde.map(e => <option key={tmp_key++} value={e.id} >{e.fach}</option>)
        const data2 = std_dienstag.stunde.map(e => <option key={tmp_key++} value={e.id}>{e.fach}</option>)
        const data3 = std_mittwoch.stunde.map(e => <option key={tmp_key++} value={e.id}>{e.fach}</option>)
        const data4 = std_donnerstag.stunde.map(e => <option key={tmp_key++} value={e.id}>{e.fach}</option>)
        const data5 = std_freitag.stunde.map(e => <option key={tmp_key++} value={e.id}>{e.fach}</option>)
        
        
        return ( 
            <tr>
                <td>{stunde}</td>
                <td><input className="time" type="time" value={this.props.vontime} name="uhrzeit_von"/><input className="time" type="time" value={this.props.bistime} name="uhrzeit_bis"/></td>
                <td className="tabledata" >
                    <select className="data" ref="list" onChange={(e) => this.props.handleProfile(0,stunde-1,e.target.value )}>  {/*0=montag*/}
                        {data1}
                    </select>
                </td>
                <td className="tabledata" >
                    
                    <select  className="data" ref='list2' onChange={(e) => this.props.handleProfile(1,stunde-1,e.target.value )}>  {/*1=dienstag*/}
                        {data2}
                    </select>
                </td>
                <td className="tabledata" >
                    <select  className="data" ref='list3' onChange={(e) => this.props.handleProfile(2,stunde-1,e.target.value )}>  {/*2=mittwoch*/}
                        {data3}
                    </select>
                </td>
                <td className="tabledata" >
                    <select  className="data" ref='list4' onChange={(e) => this.props.handleProfile(3,stunde-1,e.target.value )}>  {/*3=donnerstag*/}
                        {data4}
                    </select>
                </td>
                <td className="tabledata" >
                    <select  className="data" ref='list5' onChange={(e) => this.props.handleProfile(4,stunde-1,e.target.value )}>  {/*4=freitag*/}
                        {data5}
                    </select>
                </td>
            </tr>
         );

    }
}
 
export default TableRow;