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
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';
import Marketboard from './Marketboard';


class App extends Component {


  render() {


    return(
    <HashRouter>  
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Marketboard} />
          <Route path="/about" render={() => <About title='About' />} />
          <Route exact path="/teachers" component={Teachers} />
          <Route path="/teachers/:topic/:name" component={Featured} />
          <Route path="/courses" component={Courses} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </HashRouter>
    );
  }
}

export default App;