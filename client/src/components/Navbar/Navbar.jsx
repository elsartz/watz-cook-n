import React from 'react'
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
  import Logo from './logo.png';

export default function Navbar({ toggleMenu }) {
  return (
    <>
    <NavbarContainer>
      <LogoName>
        <LogoIcon src={Logo}></LogoIcon>
      </LogoName>
      <NavList>
        <HamburgerIcon onClick={toggleMenu}>
          <FaBars />
        </HamburgerIcon>
        <NavMenu>
          <NavItems to='/'>Home</NavItems>
          <NavItems to='/my-account'>My Account</NavItems>
          <NavItems to='/login'>Login</NavItems>
        </NavMenu>
      </NavList>
    </NavbarContainer>
  </>
  )
}
