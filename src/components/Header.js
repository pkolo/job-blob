import React from 'react';

import {StyleSheet, css} from 'aphrodite';
import { colors, fonts } from '../styles/shared'

const Header = props => {
  return (
    <div className={css(styles.container, styles.small)}>
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
    fontSize: '3em',
    fontWeight: '800',
    letterSpacing: '2px',
    color: '#FFFFFF'
  },
  pop: {
    color: colors.yellow
  },

  small: {
    '@media (max-width: 630px)': {
      padding: '25px 0',
      textAlign: 'center'
    }
  }
})

export default Header;
