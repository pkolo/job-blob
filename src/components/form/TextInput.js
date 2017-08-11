import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
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
