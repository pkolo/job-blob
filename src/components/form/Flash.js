import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

import { colors } from '../../styles/shared'

const Flash = props => {
  let messages= props.messages.split(',')
  return (
    <div className={css(styles.flashContainer)} onClick={props.clickHandler}>
      <div className={css(styles.flasHeader)}>Something went wrong...</div>
      <ul className={(css(styles.messages))}>
        {messages.map((message, i) => <li key={i}>{message}</li>)}
      </ul>
    </div>
  )
}

export default Flash;

const styles = StyleSheet.create({
  flashContainer: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(240, 240, 240, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flashHeader: {
    maxWidth: '50%',
    alignSelf: 'flex-start'
  },
  messages: {
    maxWidth: '50%',
    color: colors.red
  }
})
