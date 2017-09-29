import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Highlighter from './Highlighter'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: null,
      question: '',
      text: ''
    }
  }


  handleChangeText = (event) => {
    this.setState({text: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A text was submitted: ' + this.state.text);
    event.preventDefault();
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
        <form onSubmit={this.handleSubmit}>
          <div>
            <textarea rows={20} cols={80} placeholder={"Please enter a text"} value={this.state.text} onChange={this.handleChangeText} />
          </div>
        <input type="submit" value="Submit" />
      </form>
        <Highlighter text={this.state.text} highlightedText={this.state.answer} />
      </div>
    )
  }
}

export default App
