import React from 'react'

import Container from './container'
import Navigation from './navigation'
import Footer from './footer'
import Wrapper from './wrapper'
import base from './base.css'
import fonts from './fonts.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Container>
        <Navigation />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default Layout
