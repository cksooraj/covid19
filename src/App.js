import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom';
import Header from './Components/Header';
import India from './Components/INDIA';
import World from './Components/World';


class App extends React.Component{

  constructor(props){
      super(props);
      
  }

  render(){
      return(
          <div className="container-fluid">  
            <Router>
            <Header/>
                <Switch>
                
                      <Route exact path="/">
                             <India/>
                       </Route>
                      
                       <Route path="/India">
                              <India />
                       </Route>

                       <Route path="/World">
                              <World />
                       </Route>
                </Switch>
            </Router>

          </div>
      )
  }
}
export default App
