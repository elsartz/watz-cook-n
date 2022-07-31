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
import Modalin from '../Modalin/Modalin';
import SavedRecipes from '../../pages/savedRecipes'

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
          <NavItems to='/saved' element={<SavedRecipes/>}>My recipes</NavItems>
          {/* <NavItems to='/login'>Login</NavItems> */}
          <Modalin/>
        </NavMenu>
      </NavList>
    </NavbarContainer>
  </>
  )
}
