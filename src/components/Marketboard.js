import React, { Component } from 'react';
import ItemList from './ItemList';
import Loading from './Loading';
import { Consumer } from './Context';


class Marketboard extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let teacherName = this.name.value;
    let teacherTopic = this.topic.value;
  }

  componentDidMount() {
    console.log('Marketboard props:', this.props);
  }
  render() {

    let page;

    if (this.props.loadPercent < 100) {
      page = <Loading />
    }
    else {
      page = <ItemList />
    }

    return (
      <Consumer>
        {context => {
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




              {/* <form onSubmit={context.actions.handleSubmit}>
                <input type="text" placeholder="Name" ref={(input) => this.name = input} />
                <input type="number" placeholder="Min Gil Made" ref={(input) => this.topic = input} />
                <input type="number" placeholder="Max Units Sold" ref={(input) => this.topic = input} />
                <input type="number" placeholder="Min Transactions" ref={(input) => this.topic = input} />
                <button type="submit">Go!</button>
              </form> */}
              <hr />
              {page}
            </div>
          )
        }}
      </Consumer>

    );
  }
}

export default Marketboard;