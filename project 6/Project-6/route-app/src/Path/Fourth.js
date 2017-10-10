import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Links

} from 'react-router-dom'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Fourth = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/Fourthpointone`}>
          Fourthpointone
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/Fourthpointtwo`}>
          Fourthpointtwo
        </Link>
      </li>

    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
export default Fourth;
