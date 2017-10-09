import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,

} from 'react-router-dom'
import './index.css';
import App from './App';
import One from './Path/One';
import Two from './Path/Two';


ReactDOM.render(

  <Router>
     <div>
       <Route exact path="/" component={App}/>
       <Route path="/One" component={One}/>
        <Route path="/Two" component={Two}/>
     </div>
</Router>



,
document.getElementById('root'));
