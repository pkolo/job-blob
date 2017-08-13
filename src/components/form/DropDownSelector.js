import React, { Component } from 'react';

import InputGroup from './InputGroup'

class BasicDropDownSelector extends Component {
  render() {
    return (
      <select
        className={this.props.inputStyle}
        name={this.props.name}
        value={this.props.selectedOption}
        onChange={this.props.changeHandler} >
        <option value>{this.props.placeholder}</option>
        {
          this.props.options.map(opt => {
            return (
              <option key={opt} value={opt}>{opt}</option>
            )
          })
        }
      </select>
    )
  }
}

let DropDownSelector = InputGroup(BasicDropDownSelector)
export default DropDownSelector;
