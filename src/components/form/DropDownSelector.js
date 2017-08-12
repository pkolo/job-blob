import React, { Component } from 'react';

import {StyleSheet, css} from 'aphrodite'
import {inputGroup} from '../../styles/shared'

class DropDownSelector extends Component {
  render() {
    return (
      <div className={css(this.props.width, inputGroup.container)}>
        <div>{this.props.label}</div>
        <select
          className={css(inputGroup.input)}
          name={this.props.name}
          value={this.props.selectedOption}
          onChange={this.props.changeHandler}>
          <option value>{this.props.placeholder}</option>
          {
            this.props.options.map(opt => {
              return (
                <option key={opt} value={opt}>{opt}</option>
              )
            })
          }
        </select>
      </div>
    )
  }
}

export default DropDownSelector;
