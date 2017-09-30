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

  render () {
    const {highlightedText, text} = this.props
    const [startChunck, endChunck] = text.split(highlightedText)
    return (
      <Paper zDepth={2} style={{padding: 20}}>
        {this.renderUnhighlighted(startChunck)}
        {this.renderHighlighted(highlightedText)}
        {this.renderUnhighlighted(endChunck)}
      </Paper>
    )
  }
}

export default Highlighter
