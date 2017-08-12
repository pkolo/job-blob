import React, { Component } from 'react';

import {StyleSheet, css} from 'aphrodite'
import { inputStyles } from '../../styles/shared.js'

class TextArea extends Component {
  render() {
    return (
      <div className={css(inputStyles.container)}>
        <div className={css(inputStyles.label)}>{this.props.label}</div>
        <textarea
          style={this.props.resize ? null : {resize: 'none'}}
          name={this.props.name}
          rows={this.props.rows}
          value={this.props.content}
          onChange={this.props.changeHandler} />
      </div>
    )
  }
}

export default TextArea;
