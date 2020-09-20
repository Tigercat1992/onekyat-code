import React, { Component, Suspense } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Navbar,
  Image, NavDropdown
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faSearch, faHome, faMailBulk, faBell, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import { Images } from '../../images';

class DefaultHeader extends Component {
  state = { 
    isLoading: false,
  }

  closeNavMenu = () => {
    document.getElementById("burgerMenuContent").style.display = "none";
    document.getElementById("sidenavDark").style.display = "none";
  }

  openNavMenu = () => {
    document.getElementById("burgerMenuContent").style.animation = "fade-in 0.5s";
    document.getElementById("burgerMenuContent").style.display = "block";
    document.getElementById("sidenavDark").style.display = "block";
  }

  render() {
    const { children, ...attributes } = this.props;
    return (
      <header>
        <Navbar className="app-header-nav" expand="md" fixed="top">
          <Navbar.Brand className="logo-style" onClick={() => this.props.history.push({ pathname: '/' }) } >
            <Image src={Images.logo} width={'60%'} height={'auto'} />
          </Navbar.Brand>
          <div className="nav-search-bar ml-auto">
            <FontAwesomeIcon className="search-icon-style" icon={faSearch} />
            <input type="text" className="search-box" placeholder="Search at OneKyat" />
            <button type="button" className="search-button ml-sm-2" >{"Search"}</button>
            <span className="burger-menu" onClick={this.openNavMenu}>
              <FontAwesomeIcon className="burger-menu" icon={faEllipsisV} />
              <div id="burgerMenuContent" className="burger-menu-content">
                <a href="#"><FontAwesomeIcon className="search-icon-style pr-1" icon={faHome} />{"Home"}</a>
                <a href="#"><FontAwesomeIcon className="search-icon-style pr-1" icon={faMailBulk} />{"Message"}</a>
                <a href="#"><FontAwesomeIcon className="search-icon-style pr-1" icon={faBell} />{"Notification"}</a>
                <a href="#"><FontAwesomeIcon className="search-icon-style pr-1" icon={faHeart} />{"Favourite"}</a>
                <a href="#"><FontAwesomeIcon className="search-icon-style pr-1" icon={faUser} />{"Profile"}</a>
                <hr/>
                <a href="#">{"Rate us 5 Stars"}</a>
                <a href="#">{"Share with friends"}</a>
                <a href="#">{"Security suggestion"}</a>
                <a href="#">{"Contact to admin"}</a>
                <a href="#">{"Settings"}</a>
                <a href="#">{"Sign out"}</a>
              </div>
            </span>
            <div id="sidenavDark" className="burger-menu-close-area" onClick={this.closeNavMenu}></div>
          </div>
        </Navbar>
      </header>
    );
  }
}

export default DefaultHeader;
