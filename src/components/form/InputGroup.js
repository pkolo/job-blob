import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite'

import { colors, fonts } from '../../styles/shared'

const InputGroup = (WrappedComponent) => class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: false
    }
  }

  render() {
    return (
      <div className={css(this.props.width, styles.container)}>
        <div className={css(styles.label)}>{this.props.label} {this.props.required && <span>*</span>}</div>
        <WrappedComponent {...this.props}
          inputStyle={css(styles.input)}/>
      </div>
    );
  }
}

export default InputGroup;

const styles = StyleSheet.create({
  container: {
    padding: '10px'
  },
  label: {
    paddingBottom: '5px',
    fontFamily: fonts.heading,
    fontSize: '1.15em',
    fontWeight: '200'
  },
  input: {
    boxSizing: 'border-box',
    width: '100%',
    padding: '10px',
    fontSize: '.75em',
    border: `1px solid ${colors.lightGrey}`,
    borderRadius: '5px',
    ':focus': {
      backgroundColor: colors.lightRed,
      border: `1px solid ${colors.yellow}`,
      transition: 'border 0.05s ease-in-out, background-color 0.05s ease-in-out'
    }
  }
})
