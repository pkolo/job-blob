import React, { Component } from 'react';

import InputGroup from './InputGroup'

class BasicTextArea extends Component {
  render() {
    return (
      <textarea
        className={this.props.inputStyle}
        name={this.props.name}
        rows={this.props.rows}
        placeholder={this.props.placeholder}
        value={this.props.content}
        onChange={this.props.changeHandler}
        onFocus={this.props.styleOnFocus}
        onBlur={this.props.styleOnBlur} />
    )
  }
}

let TextArea = InputGroup(BasicTextArea)

export default TextArea;
