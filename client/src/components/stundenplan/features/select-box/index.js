import React from 'react'
import './styles.css'

class SelectBox extends React.Component {
  state = {
    ...this.props,
    items: this.props.items || [],
    selectedItem: this.props.items[0] || this.props.selectedItem,
    showItems: false,
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }))
  }

  selectItem = (item, id) => {
    this.setState({
      selectedItem: item,
      showItems: false,//nach dem auswählen eines Items geht der block wieder zu
    })
    this.props.handleDefaultPlan(id)//plan laden
  }

  target = (id) => {

    console.log(id)
  }

  /*
  componentDidMount() {
    //console.log(this.state.feacher)
    fetch('/default')
    .then(res => res.json())//.then(res => console.log(res)) //das resultat wird in res.json gemappt
    .then(feacher => this.setState({items: feacher}));
    //.then(feacher => this.setState({feacher}, () => console.log('Customers fetched...', feacher)));
  }
  */
  render () {
    //console.log(this.props.items);
    //this.setState({feacher: this.props.feacher});
    return <div>
      <div className="select-box--box">
        <div className="select-box--container">
          <div className="select-box--selected-item">
            { this.state.selectedItem.value }  {/*Ausgabe des Namen des Gewälten Elementes*/}
          </div>
          <div
            className="select-box--arrow"
            onClick={this.dropDown} //funktion dropDown wird aktiviert, und inhalt angezeigt
          ><span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}/></div> {/*wenn showItems true->Pfeil zeigt nach oben, sonnst nach unten. Der Klassenname wird per if bedingung ausgewählt*/}
        </div>
        <div
          className="select-box--items"
          style={{display: this.state.showItems ? 'block' : 'none'}} //Anzeige des Blocks
        >
          {
            this.state.items.map(item => <div
              key={item.id}
              onClick={() => this.selectItem(item, item.id)} //Item Angeklickt
              className={this.state.selectedItem === item ? 'selected' : ''} //der jeweils angeklickte wird zum selected
            >
              { item.value } {/*Ausgabe aller möglichen Items*/}
            </div>)
          }
        </div>
      </div>
      <input type="hidden" name={this.state.name} value={this.state.selectedItem.id}/> {/*für form aktivitäten*/}
    </div>
  }
}

export default SelectBox