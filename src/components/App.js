import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
//App componentes
import Header from './Header';
import Gathering from './Gathering';
import Crafting from './Crafting';
import About from './About';
import NotFound from './NotFound';
import Marketboard from './Marketboard';
import { Consumer } from './Context';


class App extends Component {



  render() {
    return (
      <Consumer>
        {context => {
          return (
            <HashRouter>
              <div className="container">
                <Header />
                <Switch>
                  <Route exact path="/" render={() => <Marketboard loadPercent={context.loadPercent}/>} />
                  <Route path="/gathering" render={() => <Gathering title='Gathering' />} />
                  <Route exact path="/crafting" component={Crafting} />
                  <Route exact path="/about" component={About} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </HashRouter>
          );
        }}

      </Consumer>

    );
  }
}

export default App;