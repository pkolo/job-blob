import React from 'react';

import {StyleSheet, css} from 'aphrodite';
import { colors, fonts } from '../styles/shared'

const Slide = props => {
  return (
    <div className={css(styles.slideContainer)}>
      <span className={css(styles.slide, styles.small)}>{props.content}</span>
    </div>
  )
}

const styles = StyleSheet.create({
  slideContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 0'
  },
  slide: {
    color: colors.red,
    fontFamily: fonts.heading,
    fontSize: '2.25em',
    fontWeight: '600'
  },

  small: {
    '@media (max-width: 630px)': {
      fontSize: '2em',
      textAlign: 'center'
    }
  }
})

export default Slide;
