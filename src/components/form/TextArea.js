import React, { Component } from 'react';

import {css} from 'aphrodite'
import {inputGroup} from '../../styles/shared'

class TextArea extends Component {
  render() {
    return (
      <div className={css(this.props.width, inputGroup.container)}>
        <div className={css(inputGroup.label)}>{this.props.label} {this.props.required && <span>*</span>}</div>
        <textarea
          className={css(inputGroup.input)}
          name={this.props.name}
          rows={this.props.rows}
          placeholder={this.props.placeholder}
          value={this.props.content}
          onChange={this.props.changeHandler} />
      </div>
    )
  }
}

export default TextArea;
