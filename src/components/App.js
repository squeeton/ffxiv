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
                  <Route exact path="/" render={() => <Marketboard />} />
                  <Route path="/about" render={() => <About title='About' />} />
                  <Route exact path="/teachers" component={Teachers} />
                  <Route path="/teachers/:topic/:name" component={Featured} />
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