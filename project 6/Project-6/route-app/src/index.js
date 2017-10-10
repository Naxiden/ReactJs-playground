import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Links

} from 'react-router-dom'
import './index.css';
import App from './App';
import One from './Path/One';
import Two from './Path/Two';
import Third from './Path/Third';
import Fourth from './Path/Fourth';
import Fourthpointone from './Path/Fourthpointone';
import NoMatch from './NoMatch';



ReactDOM.render(
    <Router>
       <Switch>
         <Route exact path='/' component={App}></Route>
         <Route path='/One' component={One}></Route>
         <Route path='/Two' component={Two}></Route>
         <Route path='/Third' component={Third}></Route>
          <Route path='/Fourth' component={Fourth}>
            
          </Route>
         <Route  component={NoMatch}></Route>
       </Switch>

</Router>



,
document.getElementById('root'));
