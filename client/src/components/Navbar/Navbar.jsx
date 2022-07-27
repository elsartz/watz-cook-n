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
  let [showModal, setShowModal] = useState(false);

  showModal = <Modalin/>
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
            <NavItems to='/home'>Home</NavItems>
            <NavItems to='/my-account'>My Account</NavItems>
            {/* <NavItems to='/login' onClick={() => {Modalin(); setShowModal === !setShowModal}}>Login</NavItems> */}
            <Modalin/>
          </NavMenu>
        </NavList>
      </NavbarContainer>
    </>
    // <nav className={NavbarCSS.navbar}>
    //   <img className={NavbarCSS.logo} src={logo} alt='logo' />
    //   <div className={NavbarCSS.navbarOptions}>
    //     <ul>
    //       <Button>
    //         {' '}
    //         {/*variant="contained" */}
    //         <li className='active'>
    //           <a href='/Home'>home</a>

    //           <span>home</span>
    //           <img className={NavbarCSS.home} src={homeIcon} alt='home' />
    //         </li>
    //       </Button>
    //       <Button>
    //         <li>
    //           <a href='/fav'>favourites</a>
    //           <span>favourites</span>
    //           <img className={NavbarCSS.fav} src={favIcon} alt='favourites' />
    //         </li>
    //       </Button>
    //       <Button>
    //         <li>
    //           <a href='/login' element={<Login />}>
    //             log in
    //           </a>
    //           {/* <Link to="/login" element={<Login />}>Login</Link> */}
    //           {/* <Route
    //             path="/login"
    //             element={<Login />}
    //           /> */}
    //           <span>account</span>
    //           <img className={NavbarCSS.acc} src={accIcon} alt='my account' />
    //         </li>
    //       </Button>
    //     </ul>
    //   </div>
    // </nav>
  );
}
