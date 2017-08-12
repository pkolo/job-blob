import React, { Component } from 'react';

import {StyleSheet, css} from 'aphrodite'
import {inputGroup} from '../../styles/shared'

class TextInput extends Component {
  render() {
    return (
      <div className={css(this.props.width, inputGroup.container)}>
        <div>{this.props.label}</div>
        <input
          className={css(inputGroup.input)}
          name={this.props.name}
          type={this.props.type}
          value={this.props.content}
          onChange={this.props.changeHandler} />
      </div>
    )
  }
}

export default TextInput;
