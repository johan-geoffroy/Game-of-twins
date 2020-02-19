import React,{Component} from 'react';

//React router
import ScrollToTop from './components/ScrollToTop';
import {Switch, Route} from 'react-router-dom';

//import containers
import Home from './containers/HomeContainer';

class App extends Component {



  render(){
    return(
      <div className="main container-fluid">
        <ScrollToTop />

        <Switch>
          {/* <Route path="/contact">
            <p>Page contact</p>
          </Route> */}

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
