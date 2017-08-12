import React, { Component } from 'react';

import {css} from 'aphrodite'
import {inputGroup} from '../../styles/shared'

class TextArea extends Component {
  render() {
    return (
      <div className={css(this.props.width, inputGroup.container)}>
        <div>{this.props.label}</div>
        <textarea
          className={css(inputGroup.input)}
          name={this.props.name}
          rows={this.props.rows}
          value={this.props.content}
          onChange={this.props.changeHandler} />
      </div>
    )
  }
}

export default TextArea;
