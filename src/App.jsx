import React, { Component } from 'react'
import { Movies } from './Movies'

class App extends Component {
  render() {
    return (
      <body>
        <header>
          <h1 className="title">Party Like Its 1989!</h1>
        </header>
        <main>
          <Movies />
        </main>
        <footer>SUNCOAST DEVELOPER'S GUILD</footer>
      </body>
    )
  }
}

export default App
