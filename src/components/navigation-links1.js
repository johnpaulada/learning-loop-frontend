import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation-links1.module.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text1}</span>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text1: 'Features',
  rootClassName: '',
}

NavigationLinks1.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks1
