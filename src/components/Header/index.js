// Write your code here

import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <>
    <div className="header-cont">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="header-img"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button type="button" className="butt">
            <GiHamburgerMenu className="icon" />
          </button>
        }
      >
        {close => (
          <div className="menu-container">
            <div className="menu-1">
              <button type="button" className="butt" onClick={() => close()}>
                <IoMdClose className="icon" />
              </button>
            </div>
            <ul className="menu-2">
              <Link to="/" onClick={() => close()} className="link-1">
                <li className="row-1 link-1">
                  <AiFillHome className="icon" />
                  <h1 className="link-1">Home</h1>
                </li>
              </Link>
              <Link to="/about" onClick={() => close()} className="link-1">
                <li className="row-1">
                  <BsInfoCircleFill className="icon" />
                  <h1 className="link-1">About</h1>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </>
)

export default Header
