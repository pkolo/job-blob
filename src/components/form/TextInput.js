import React, { Component } from 'react';

import {StyleSheet, css} from 'aphrodite'
import {inputGroup} from '../../styles/shared'

class TextInput extends Component {
  render() {
    return (
      <div className={css(this.props.width, inputGroup.container)}>
        <div className={css(inputGroup.label)}>{this.props.label} {this.props.required && <span>*</span>}</div>
        <input
          className={css(inputGroup.input)}
          name={this.props.name}
          type={this.props.type}
          value={this.props.content}
          placeholder={this.props.placeholder}
          onChange={this.props.changeHandler}
          onFocus={this.props.focusHandler} />
      </div>
    )
  }
}

export default TextInput;
