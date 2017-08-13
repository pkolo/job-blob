import React, { Component } from 'react';

import {StyleSheet, css} from 'aphrodite';
import { colors, fonts } from '../styles/shared'

const Header = props => {
  return (
    <div className={css(styles.container)}>
      <span className={css(styles.siteName)}>
        job
        <span className={css(styles.pop)}>Blob</span>
      </span>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: '25px',
    marginBottom: '20px',
    backgroundColor: colors.red
  },
  siteName: {
    fontFamily: fonts.heading,
    fontSize: '2.25em',
    fontWeight: '800',
    color: '#FFFFFF'
  },
  pop: {
    color: colors.yellow
  }
})

export default Header;
