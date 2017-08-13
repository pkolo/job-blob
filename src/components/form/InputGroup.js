import React, { Component } from 'react';
import {css, StyleSheet} from 'aphrodite'

const InputGroup = (WrappedComponent) => class extends Component {
  constructor(props) {
    super(props)

    this.onFocus = this.onFocus.bind(this)
  }

  onFocus(e) {
    console.log(e)
  }

  render() {
    return (
      <div className={css(this.props.width, styles.container)}>
        <div className={css(styles.label)}>{this.props.label} {this.props.required && <span>*</span>}</div>
        <WrappedComponent {...this.props} styleOnFocus={this.onFocus} inputStyle={css(styles.input)}/>
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
    fontSize: '1.15em',
    fontWeight: '200'
  },
  input: {
    boxSizing: 'border-box',
    width: '100%',
    padding: '10px',
    fontSize: '.75em'
  }
})
