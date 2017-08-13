import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

import { colors } from '../styles/shared'

const ErrorMessageList = props => {
  return (
    <div className={css(styles.error)}>
      {props.errors}
    </div>
  )
}

export default ErrorMessageList;

const styles = StyleSheet.create({
  error: {
    color: colors.darkRed
  }
})
