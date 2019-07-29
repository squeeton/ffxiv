import React, { Component } from 'react';
import ItemList from './ItemList';
import Loading from './Loading';
import { Consumer } from './Context';
import SearchForm from './SearchForm'


class Marketboard extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  componentDidMount() {
  }
  render() {

    let page;
    let specifics;

    if (this.props.loadPercent < 100) {
      page = <Loading />
    }
    else {
      page = <ItemList />
    }

    return (
      <Consumer>
        {context => {
          if ((context.loadPercent === 100) && (context.specificLoaded < context.specificTotal)) {
            specifics =
              <div className="row">
                <div className="col"></div>
                <div className="col">Loading Crafters</div>
                <div className="col">{((context.specificLoaded / context.specificTotal) * 100).toFixed(1)}%</div>
              </div>
          }
          else {
            specifics = <div></div>
          }
          return (

            <div className="main-content home">
              <div className="row">
                <div className="col"></div>
                <div className="col"><h2>Currently only working on Goblin</h2></div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col">
                  <p><strong>Item name</strong> search box is case insensitive</p>
                </div>
                <div className="col">
                  <p><strong>Gil made Last Week</strong> search box is for gil <strong>greater than or equal to</strong> the provided value</p>
                </div>
                <div className="col">
                  <p><strong>Units Sold Last Week</strong> search box is for units <strong>less than or equal to</strong> the provided value</p>
                </div>
                <div className="col">
                  <p><strong>Transactions Last Week</strong> search box is for transactions <strong>greater than or equal to</strong> the provided value</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col nopad"><SearchForm /></div>
                
              </div>
              <div className="row">
                <div className="col nopad">
                  {specifics}
                </div>
              </div>
              <div className="row">
                <div className="col nopad">
                  {page}
                </div>
              </div>

            </div>
          )
        }}
      </Consumer>

    );
  }
}

export default Marketboard;