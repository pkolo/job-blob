import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

import { colors } from '../../styles/shared'

const Flash = props => {
  return (
    <div className={css(styles.error)}>
      Anything
    </div>
  )
}

export default Flash;

const styles = StyleSheet.create({
  error: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    backgroundColor: colors.lightGrey
  }
})
