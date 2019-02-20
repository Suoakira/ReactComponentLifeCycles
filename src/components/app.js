import React, { Component } from 'react'

import Discussion from "./Discussion"
import Rules from "./Rules"
import Workflow from "./Workflow"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Skeleton</h2>
        <Discussion />
        <Rules />
        <Workflow />
      </div>
    );
  }
}