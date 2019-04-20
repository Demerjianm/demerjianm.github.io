import React from 'react'
import { Link } from 'gatsby'
import Menu from './Menu'
import Hamburger from './Hamburger'
import logo from '../images/logo.svg'
import logoMobile from '../images/logo-mobile.svg'
import MenuMobile from './MenuMobile'

const getColor = () => {
  return (
    '#' +
    Math.random()
      .toString(16)
      .slice(2, 8)
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: false
    }
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive
    }))
  }

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              {/* <img alt="Figurit Homepage" src={logo} /> */}
              <h2>
                <span style={{ color: getColor() }}>B</span>
                <span style={{ color: getColor() }}>a</span>
                <span style={{ color: getColor() }}>s</span>
                <span style={{ color: getColor() }}>e</span>
                <span style={{ color: getColor() }}>p</span>
                <span style={{ color: getColor() }}>a</span>
                <span style={{ color: getColor() }}>y</span>
                <span style={{ color: getColor() }}>r</span>
                <span style={{ color: getColor() }}>o</span>
                <span style={{ color: getColor() }}>l</span>
                <span style={{ color: getColor() }}>l</span>
              </h2>
            </Link>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              {/* <img alt="Figurit Homepage" src={logoMobile} /> */}
              <h2>
                <span style={{ color: getColor() }}>B</span>
                <span style={{ color: getColor() }}>a</span>
                <span style={{ color: getColor() }}>s</span>
                <span style={{ color: getColor() }}>e</span>
                <span style={{ color: getColor() }}>l</span>
                <span style={{ color: getColor() }}>i</span>
                <span style={{ color: getColor() }}>n</span>
                <span style={{ color: getColor() }}>e</span>
              </h2>
            </Link>
          </div>
          <MenuMobile active={this.state.menuActive} />
          <Menu />
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    )
  }
}

export default Header
