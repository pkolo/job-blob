import React, { Component } from 'react';

import {StyleSheet, css} from 'aphrodite';

const Header = props => {
  return (
    <div className={css(styles.container, styles.red)}>
      <span className={css(styles.siteName)}>
        Job
        <span className={css(styles.yellow)}>Blob</span>
      </span>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: '25px',
    marginBottom: '20px'
  },
  siteName: {
    fontSize: '2.25em',
    fontWeight: '800',
    color: '#FFFFFF'
  },
  yellow: {
    color: '#FED667'
  },
  red: {
    backgroundColor: '#F05E5D'
  }
})

export default Header;
