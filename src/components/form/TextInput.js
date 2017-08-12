import React, { Component } from 'react';

import {StyleSheet, css} from 'aphrodite'
import { inputStyles } from '../../styles/shared.js'

class TextInput extends Component {
  render() {
    return (
      <div className={css(inputStyles.container)}>
        <div className={css(inputStyles.label)}>{this.props.label}</div>
        <input
          name={this.props.name}
          type={this.props.type}
          value={this.props.content}
          onChange={this.props.changeHandler} />
      </div>
    )
  }
}

export default TextInput;
