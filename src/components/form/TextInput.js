import React, { Component } from 'react';

import InputGroup from './InputGroup'

class BasicTextInput extends Component {
  constructor(props) {
    super(props)

    this.handleFocus = this.handleFocus.bind(this)
  }

  handleFocus(e) {
    if (this.props.focusHandler) {
      this.props.focusHandler(e)
    }
  }

  render() {
    return (
      <input
        className={this.props.inputStyle}
        name={this.props.name}
        type={this.props.type}
        value={this.props.content}
        placeholder={this.props.placeholder}
        onChange={this.props.changeHandler}
        onFocus={this.handleFocus} />
    )
  }
}

let TextInput = InputGroup(BasicTextInput)
export default TextInput;
