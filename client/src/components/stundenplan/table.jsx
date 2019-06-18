import React, { Component } from 'react';
import TableRow from './tablerow';
import TableHead from './tablehead';
import './all.css';




class Table extends Component {


    render() { 
        const {montag, dienstag, mittwoch, donnerstag, freitag} = this.props

        //console.log(montag)

        return ( 
                <React.Fragment>
                    <tbody id="fullTable">

                        <TableHead />
                        {/*hätte man evtl auch mappen können*/}
                        <TableRow   std_montag={montag[0]} //montag die erste Stunde wird übergeben
                                    std_dienstag={dienstag[0]}
                                    std_mittwoch={mittwoch[0]}
                                    std_donnerstag={donnerstag[0]}
                                    std_freitag={freitag[0]}
                                    stunde = '1' //nötig um die aktuelle stunde anzuzeigen
                                    handleProfile= {this.props.handleProfile}
                                    vontime= '08:00'
                                    bistime= '09:00'
                        />
                        <TableRow   std_montag={montag[1]}
                                    std_dienstag={dienstag[1]}
                                    std_mittwoch={mittwoch[1]}
                                    std_donnerstag={donnerstag[1]}
                                    std_freitag={freitag[1]}
                                    stunde = '2'
                                    handleProfile= {this.props.handleProfile}
                                    vontime= '09:00'
                                    bistime= '10:00'
                        />
                        <TableRow   std_montag={montag[2]}
                                    std_dienstag={dienstag[2]}
                                    std_mittwoch={mittwoch[2]}
                                    std_donnerstag={donnerstag[2]}
                                    std_freitag={freitag[2]}
                                    stunde = '3'
                                    handleProfile= {this.props.handleProfile}
                                    vontime= '10:00'
                                    bistime= '11:00'
                        />
                        <TableRow   std_montag={montag[3]}
                                    std_dienstag={dienstag[3]}
                                    std_mittwoch={mittwoch[3]}
                                    std_donnerstag={donnerstag[3]}
                                    std_freitag={freitag[3]}
                                    stunde = '4'
                                    handleProfile= {this.props.handleProfile}
                                    vontime= '11:00'
                                    bistime= '12:00'
                        />
                        <TableRow   std_montag={montag[4]}
                                    std_dienstag={dienstag[4]}
                                    std_mittwoch={mittwoch[4]}
                                    std_donnerstag={donnerstag[4]}
                                    std_freitag={freitag[4]}
                                    stunde = '5'
                                    handleProfile= {this.props.handleProfile}
                                    vontime= '12:00'
                                    bistime= '13:00'
                        />
                        <TableRow   std_montag={montag[5]}
                                    std_dienstag={dienstag[5]}
                                    std_mittwoch={mittwoch[5]}
                                    std_donnerstag={donnerstag[5]}
                                    std_freitag={freitag[5]}
                                    stunde = '6'
                                    handleProfile= {this.props.handleProfile}
                                    vontime= '13:00'
                                    bistime= '14:00'
                        />
                        <TableRow   std_montag={montag[6]}
                                    std_dienstag={dienstag[6]}
                                    std_mittwoch={mittwoch[6]}
                                    std_donnerstag={donnerstag[6]}
                                    std_freitag={freitag[6]}
                                    stunde = '7'
                                    handleProfile= {this.props.handleProfile}
                                    vontime= '14:00'
                                    bistime= '15:00'
                        />
                        <TableRow   std_montag={montag[7]}
                                    std_dienstag={dienstag[7]}
                                    std_mittwoch={mittwoch[7]}
                                    std_donnerstag={donnerstag[7]}
                                    std_freitag={freitag[7]}
                                    stunde = '8'
                                    handleProfile= {this.props.handleProfile}
                                    vontime= '15:00'
                                    bistime= '16:00'
                        />
                        <TableRow   std_montag={montag[8]}
                                    std_dienstag={dienstag[8]}
                                    std_mittwoch={mittwoch[8]}
                                    std_donnerstag={donnerstag[8]}
                                    std_freitag={freitag[8]}
                                    stunde = '9'
                                    handleProfile= {this.props.handleProfile}
                                    vontime= '16:00'
                                    bistime= '17:00'
                        />
                        <TableRow   std_montag={montag[9]}
                                    std_dienstag={dienstag[9]}
                                    std_mittwoch={mittwoch[9]}
                                    std_donnerstag={donnerstag[9]}
                                    std_freitag={freitag[9]}
                                    stunde = '10'
                                    handleProfile= {this.props.handleProfile}
                                    vontime= '17:00'
                                    bistime= '18:00'
                        />
                        <TableRow   std_montag={montag[10]}
                                    std_dienstag={dienstag[10]}
                                    std_mittwoch={mittwoch[10]}
                                    std_donnerstag={donnerstag[10]}
                                    std_freitag={freitag[10]}
                                    stunde = '11'
                                    handleProfile= {this.props.handleProfile}
                                    vontime= '18:00'
                                    bistime= '19:00'
                        />
                        <TableRow   std_montag={montag[11]}
                                    std_dienstag={dienstag[11]}
                                    std_mittwoch={mittwoch[11]}
                                    std_donnerstag={donnerstag[11]}
                                    std_freitag={freitag[11]}
                                    stunde = '12'
                                    handleProfile= {this.props.handleProfile}
                                    vontime= '19:00'
                                    bistime= '20:00'
                        />


                    </tbody> 
                </React.Fragment>
                )
    }
}
 

export default Table;