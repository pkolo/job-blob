import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import { colors } from '../../styles/shared'

const Button = props => {
  let label = props.label.toUpperCase()
  return (
    <button onClick={props.handleClick} className={css(styles.button)} >
      {label}
    </button>
  )
}

export default Button;

const styles = StyleSheet.create({
  button: {
    margin: '10px',
    padding: '10px 25px',
    border: `2px solid ${colors.red}`,
    backgroundColor: colors.white,
    color: colors.red,
    fontWeight: '800',
    ':hover': {
      backgroundColor: colors.yellow,
      cursor: 'pointer',
      transition: 'background-color 0.15s ease-in-out'
    }
  }
})
