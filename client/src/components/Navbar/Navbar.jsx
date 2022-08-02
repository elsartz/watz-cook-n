import React, {useState} from 'react'
import SignUpForm from '../SignUpForm/SignupForm'
import LoginForm from '../LoginForm/LoginForm'
import Auth from '../../utils/auth';
import {  Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    LogoIcon,
    NavbarContainer,
    NavList,
    NavMenu,
    NavItems,
    LogoName,
    NavItem2
  } from './Navbar.style';

  import { FaBars } from 'react-icons/fa';
  import Logo from './logo.png';


export default function Header() {

  const [showModal, setShowModal] = useState(false);

  return (
<>
       <NavbarContainer>
       <LogoName  as={Link} to='/'>
        <LogoIcon src={Logo}></LogoIcon>
      </LogoName>
      {Auth.loggedIn() ? (
             <h1>Welcome! You can add to favorites</h1>
              ) : (
              <h1></h1>
              )}
                    <NavList>
                   <NavMenu>
                   <NavItems to='/'>Home</NavItems>
                   <NavItems to='/favourites'>My Account</NavItems>

              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <NavItem2> <Nav.Link onClick={Auth.logout}>Loutout</Nav.Link></NavItem2>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}><NavItem2>Login/Sign Up</NavItem2></Nav.Link>
              )}
                 </NavMenu>
                  </NavList>
        </NavbarContainer>

      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  )
}
