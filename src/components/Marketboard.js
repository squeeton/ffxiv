import React, { Component } from 'react';
import ItemList from './ItemList';
import Loading from './Loading';


class Marketboard extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let teacherName = this.name.value;
    let teacherTopic = this.topic.value;

    let path = `teachers/${teacherTopic}/${teacherName}`;
    this.props.history.push(path);
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
      page = <ItemList/>
    }

    return (
      <div className="main-content home">
        <p>Currently only working on Goblin</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" ref={(input) => this.name = input} />
          <input type="text" placeholder="Topic" ref={(input) => this.topic = input} />
          <button type="submit">Go!</button>
        </form>
        <hr />
        {page}
      </div>
    );
  }
}

export default Marketboard;