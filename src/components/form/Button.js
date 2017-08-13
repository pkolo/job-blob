import React from 'react';
import { css, StyleSheet } from 'aphrodite';

const Button = props => {
  return (
    <button onClick={this.props.handleClick}>
      {this.props.label}
    </button>
  )
}

export default Button;
