import React, { Component } from 'react';
import './all.css';

class TableHead extends Component {


    render() { 


        return ( 
            
            
            <tr id="headerRow">
                <th>Stunde</th>
                <th>Zeit</th>
                <th>Montag</th>
                <th>Dienstag</th>
                <th>Mittwoch</th>
                <th>Donnerstag</th>
                <th>Freitag</th>
            </tr>
        
         );
    }
}
 
    export default TableHead;