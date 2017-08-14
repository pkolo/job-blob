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
          this.props.options.map((opt, i) => {
            let name = this.props.optionNameFormatter(opt)
            return (
              <option key={opt.id} value={opt.id}>{name}</option>
            )
          })
        }
      </select>
    )
  }
}

let DropDownSelector = InputGroup(BasicDropDownSelector)
export default DropDownSelector;
