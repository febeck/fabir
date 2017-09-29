import React, { Component } from 'react'
import './Highlighter.css'


class Highlighter extends Component {
  constructor (props) {
    super(props)
    let chuncks = props.text.split(props.highlightedText)
    this.state = {
      startChunck: chuncks[0],
      highlightedChunck: props.highlightedText,
      endChunck: chuncks[1],
    }
  }

  renderHighlighted = (text) => {
    return <span className="highlighted">{text}</span>
  }

  renderUnhighlighted = (text) => {
    return <span className="unhighlighted">{text}</span>
  }

  render () {
    return (
      <div>
        {this.renderUnhighlighted(this.state.startChunck)}
        {this.renderHighlighted(this.state.highlightedChunck)}
        {this.renderUnhighlighted(this.state.endChunck)}
      </div>
    )
  }
}

export default Highlighter
