import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    return (
      <p>This is a text input for {this.props.label}</p>
    )
  }
}

export default TextInput;
