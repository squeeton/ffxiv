import React, { Component } from 'react';
import ItemList from './ItemList';


class Marketboard extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      loading: true
    }
  }



  componentDidMount() {
    console.log('Fetching Data');
    // fetch("https://xivapi.com/market/Goblin/item/3", { mode: 'cors' })
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       items: data,
    //       loading: false
    //     })
    //   })
    //   .then(
    //     console.log('items length:', this.state.items.length)
    //   )
    //   .then(
    //     console.log('items :', this.state.items));

    const offlineData =
      {
        "History": [
          {
            "Added": 1562963911156,
            "CharacterID": "(UUID) 218068bc-7fc4-4298-8730-f6212bb98918",
            "CharacterName": "FirstName LastName",
            "ID": "(sha1 hash) da39a3ee5e6b4b0d3255bfef95601890afd80709",
            "IsHQ": false,
            "PricePerUnit": 99,
            "PriceTotal": 77220,
            "PurchaseDate": 1562963911156,
            "PurchaseDateMS": "1562963911156",
            "Quantity": 780
          },
        ],
        "ID": "46_3",
        "ItemID": 3,
        "Prices": [
          {
            "Added": 1553871386,
            "CreatorSignatureID": null,
            "CreatorSignatureName": "",
            "ID": "(sha1 hash) da39a3ee5e6b4b0d3255bfef95601890afd80709",
            "IsCrafted": false,
            "IsHQ": false,
            "Materia": [],
            "PricePerUnit": 92,
            "PriceTotal": 105248,
            "Quantity": 1144,
            "RetainerID": "c33f54aa-47c4-4829-91af-e9d5792d3978",
            "RetainerName": "RetainerName",
            "StainID": 0,
            "TownID": 1
          },
        ],
        "Server": 46,
        "Updated": 1562963911156
      };

      console.log('offline daa:', offlineData);

      this.setState({
        items: [offlineData],
        loading:false
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let teacherName = this.name.value;
    let teacherTopic = this.topic.value;

    let path = `teachers/${teacherTopic}/${teacherName}`;
    this.props.history.push(path);
  }

  render() {


    return (
      <div className="main-content home">
        <p>Currently only working on Goblin</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" ref={(input) => this.name = input} />
          <input type="text" placeholder="Topic" ref={(input) => this.topic = input} />
          <button type="submit">Go!</button>
        </form>
        <hr />
        <ItemList data={this.state.items} dataCount={this.state.items.length} />
      </div>
    );
  }
}

export default Marketboard;