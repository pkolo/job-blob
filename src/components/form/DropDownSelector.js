import React, { Component } from 'react';

class DropDownSelector extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <select
          name={this.props.name}>
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
