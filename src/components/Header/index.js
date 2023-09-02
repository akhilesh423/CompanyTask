import {Component} from 'react'

import {AiOutlineMenu} from 'react-icons/ai'

import './index.css'

class Header extends Component {
  state = {isClicked: false}

  showMenu = () => {
    const {isClicked} = this.state
    this.setState({isClicked: !isClicked})
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="header-container">
        <nav className="navbar">
          <div>
            <button
              type="button"
              className="menu-button"
              onClick={this.showMenu}
            >
              {' '}
              <AiOutlineMenu className="icon" />
            </button>

            {isClicked ? (
              <ul className="list-items-menu">
                <li className="each-list">Home</li>
                <li className="each-list">About</li>
                <li className="each-list">Schedules</li>
                <li className="each-list">Membership</li>
                <li className="each-list">Pricing</li>
              </ul>
            ) : (
              ''
            )}
          </div>

          <ul className="list-items-nav">
            <li className="each-list-item">Home</li>
            <li className="each-list-item">About</li>
            <li className="each-list-item">Schedules</li>
            <li className="each-list-item">Membership</li>
            <li className="each-list-item">Pricing</li>
          </ul>
          <div className="btn-offer-container">
            <p className="offers-option-nav">Offers</p>
            <button className="button-navbar" type="button">
              Courses
            </button>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
