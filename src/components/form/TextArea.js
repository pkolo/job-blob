import React, { Component } from 'react';

import {css} from 'aphrodite'
import {inputGroup} from '../../styles/shared'

import InputGroup from './InputGroup'

class BasicTextArea extends Component {
  render() {
    return (
      <div>
        <div className={css(inputGroup.label)}>{this.props.label} {this.props.required && <span>*</span>}</div>
        <textarea
          className={css(inputGroup.input)}
          name={this.props.name}
          rows={this.props.rows}
          placeholder={this.props.placeholder}
          value={this.props.content}
          onChange={this.props.changeHandler}
          onFocus={this.props.styleOnFocus} />
      </div>
    )
  }
}

let TextArea = InputGroup(BasicTextArea)

export default TextArea;
