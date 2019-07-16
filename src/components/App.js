import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
//App componentes
import Header from './Header';
import About from './About';
import Teachers from './Teachers';
import NotFound from './NotFound';
import Featured from './Featured';
import Marketboard from './Marketboard';


class App extends Component {

  state = {
    items: [],
    data: [],
    loadPercent: 0,
    pageNumber: 2,
    pageTotal:0,
    resultsTotal:0
  }

  componentDidMount() {

    fetch(`https://xivapi.com/search?indexes=item&filters=ItemSearchCategory.ID>=9&page=${this.state.pageNumber}`, { mode: 'cors' })
      .then(response => response.json())
      .then(data => {
        this.setState({
          sellables: [data],
          loading: 10
        })
      });
      
    console.log('Fetching Data');
    fetch("https://xivapi.com/market/Goblin/item/3", { mode: 'cors' })
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: [data]
        })
      });
    console.log('items:', this.state.items);
    console.log('sellables:', this.state.sellables);
  }



  render() {

    return (
      <HashRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Marketboard items={this.state.items} loadPercent={this.state
              .loadPercent}/>} />
            <Route path="/about" render={() => <About title='About' />} />
            <Route exact path="/teachers" component={Teachers} />
            <Route path="/teachers/:topic/:name" component={Featured} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;