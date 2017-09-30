import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import './Highlighter.css'


class Highlighter extends Component {

  renderHighlighted = (text) => {
    return <a onClick={this.props.onClick} className="highlighted">{text}</a>
  }

  renderUnhighlighted = (text) => {
    return <a onClick={this.props.onClick} className="unhighlighted">{text}</a>
  }

  renderAnswer = () => {
    const {highlightedText, text} = this.props
    const [startChunck, endChunck] = text.split(highlightedText)
    return (
      <div>
        {this.renderUnhighlighted(startChunck)}
        {this.renderHighlighted(highlightedText)}
        {this.renderUnhighlighted(endChunck)}
      </div>
    )
  }

  renderError = () => {
    return (
      <a onClick={this.props.onClick} className="unhighlighted">
        {"Sorry, but we couldn't find an answer for your question. Please try again"}
      </a>
    )
  }

  render () {
    return(
      <Paper zDepth={2} style={{padding: 20}}>
        {this.props.hasError
          ? this.renderError()
          : this.renderAnswer()
        }
      </Paper>
    )
  }
}

export default Highlighter
