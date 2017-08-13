import React, { Component } from 'react';

import {css} from 'aphrodite'

import InputGroup from './InputGroup'

class BasicDropDownSelector extends Component {
  render() {
    return (
      <div>
        <select
          className={this.props.inputStyle}
          name={this.props.name}
          value={this.props.selectedOption}
          onChange={this.props.changeHandler}
          onFocus={this.props.styleOnFocus}>
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

let DropDownSelector = InputGroup(BasicDropDownSelector)
export default DropDownSelector;
