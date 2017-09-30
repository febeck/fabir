import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Highlighter from './Highlighter'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: null,
      canEdit: true,
      question: '',
      text: ''
    }
  }

  handleChangeText = (event) => {
    this.setState({text: event.target.value});
  }

  handleChangeQuestion = (event) => {
    this.setState({question: event.target.value});
  }

  handleKeyPressed = (e) => {
    if (e.charCode === 13) {
      this.handleSubmit()
    }
  }

  togglePreview = () => {
    this.setState({canEdit: true})
  }

  handleSubmit = () => {
    alert('A text was submitted: ' + this.state.text);
  }

  render () {
    return (
      <MuiThemeProvider>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Welcome to FABIR</h1>
          </header>
          <div className='App-body'>

            {this.state.canEdit
              ?
                <TextField
                floatingLabelText="Text"
                hintText="Please enter the text"
                fullWidth
                multiLine
                onChange={this.handleChangeText} />
              :
                <Highlighter
                text={this.state.text}
                highlightedText={this.state.answer}
                onClick={this.togglePreview}/>
            }

            <TextField
              floatingLabelText="Question"
              hintText="Please ask a question"
              fullWidth
              onChange={this.handleChangeQuestion}
              onKeyPress={this.handleKeyPressed} />

            <RaisedButton
              primary={true}
              label= {'Search'}
              onClick={this.handleSubmit}
              style={{margin: 12}} />

          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
