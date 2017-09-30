import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress';
import Highlighter from './Highlighter'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: null,
      canEdit: true,
      hasError: false,
      isLoading: false,
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
    this.setState({
      canEdit: false,
      isLoading: true,
      answer: null
    })
    axios.post('/xxxxx', {
      text: this.state.text,
      question: this.state.question
    })
    .then(response => {
      this.setState({
        isLoading: false,
        answer: response.data
      })
    })
    .catch(error => {
      this.setState({
        isLoading: false,
        hasError: true
      })
    });
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
              ? <TextField
                  floatingLabelText="Text"
                  hintText="Please enter the text"
                  value={this.state.text}
                  fullWidth
                  multiLine
                  onChange={this.handleChangeText}
                  disabled={this.state.isLoading}/>
              : <Highlighter
                  text={this.state.text}
                  hasError={this.state.hasError}
                  highlightedText={this.state.answer}
                  onClick={this.togglePreview}/>
            }

            <TextField
              floatingLabelText="Question"
              hintText="Please ask a question"
              value={this.state.question}
              fullWidth
              onChange={this.handleChangeQuestion}
              onKeyPress={this.handleKeyPressed}
              disabled={this.state.isLoading}/>

            {this.state.isLoading
              ? <CircularProgress size={30} style={{margin: 12}}/>
              : <RaisedButton
                primary={true}
                label= {'Search'}
                onClick={this.handleSubmit}
                style={{margin: 12}} />
            }
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
