import React, { Component } from 'react'

import Navigation from "./Navigation"
import PageContent from "./PageContent"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <Navigation />
        <PageContent />
      </div>
    );
  }
}