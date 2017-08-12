import React, { Component } from 'react';

import {StyleSheet, css} from 'aphrodite'
import { inputStyles } from '../../styles/shared.js'

class DropDownSelector extends Component {
  render() {
    return (
      <div className={css(inputStyles.container)}>
        <div className={css(inputStyles.label)}>{this.props.label}</div>
        <select
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
