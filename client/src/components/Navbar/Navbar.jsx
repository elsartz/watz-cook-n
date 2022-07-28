// import Button from 'mui-button';
// import { Link, Route } from 'react-router-dom';
import React, {useState} from 'react';
import {
  LogoIcon,
  NavbarContainer,
  NavList,
  HamburgerIcon,
  NavMenu,
  NavItems,
  LogoName,
} from './Navbar.style';
import { FaBars } from 'react-icons/fa';
// import homeIcon from './svg/home.svg';
// import favIcon from './svg/fav.svg';
// import accIcon from './svg/acc.svg';
// import logo from './svg/logo.png';
// import NavbarCSS from '../NavBar/Navbar.module.css';

// import Login from '../../pages/Login';
import Modalin from '../Modalin/Modalin';
import Logo from '../../assets/logo/logo.png';

export default function AppNavbar({ toggleMenu }) {
  // const [showModal, setShowModal] = useState(false);

  
  return (
    <div>
      <NavbarContainer>
        <LogoName>
          <LogoIcon src={Logo}></LogoIcon>
        </LogoName>
        <NavList>
          <HamburgerIcon onClick={toggleMenu}>
            <FaBars />
          </HamburgerIcon>
          <NavMenu>
            <NavItems to='/home'>Home</NavItems>
            <NavItems to='/my-account'>My Account</NavItems>
            {/* <NavItems to='/login' onClick={() => {Modalin(); setShowModal === !setShowModal}}>Login</NavItems> */}
            <Modalin/>
          </NavMenu>
        </NavList>
      </NavbarContainer>
    </div>
   
  );
}
