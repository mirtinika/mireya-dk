import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

import Wrapper from './wrapper'

export default () => (
  <nav role="navigation">
    <Wrapper>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/work/">Work</Link>
        </li>
      </ul>
    </Wrapper>
  </nav>
)
