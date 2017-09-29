import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Highlighter from './Highlighter'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      answer: null
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to FABIR</h1>
        </header>
        <p className='App-intro'>
          Please insert a text and ask a question
        </p>
        <Highlighter text={this.state.text} highlightedText={this.state.answer} />
      </div>
    )
  }
}

export default App
