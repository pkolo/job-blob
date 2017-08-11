import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <textarea
          style={this.props.resize ? null : {resize: 'none'}}
          name={this.props.name}
          rows={this.props.rows}
          value={this.props.content} />
      </div>
    )
  }
}

export default TextArea;
