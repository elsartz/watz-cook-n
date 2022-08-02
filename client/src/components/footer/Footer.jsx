import React from 'react';
import styled from 'styled-components';
import {
  CDBBox,
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
} from 'cdbreact';
import logo from '../../assets/images/digital-minions.jpg';
export default function Footer() {
  return (
    <FooterWrapper>
      <CDBFooter className='shadow'>
        <CDBBox
          display='flex'
          flex='column'
          className='mx-auto py-4'
          style={{ width: '90%' }}
        >
          <CDBBox display='flex' justifyContent='between' className='flex-wrap'>
            <CDBBox>
              <img alt='logo' src={logo} width='100px' />
              &nbsp;&nbsp;
              <a href='/' className='d-flex align-items-center p-0 text-dark'>
                <span className='ml-3 mt-3 h5 font-weight-bold'>
                  The Minions
                </span>
              </a>
              <p className='my-4' style={{ width: '250px', fontWeight: '400' }}>
               <span>
               We are a professional full-stack MERN developers team. Our team
                consist of 5+ years experiences members, who build hundreds of
                applications for many clients; Vardis, Ayva, Cameron & Sophoan.
                </span>
              </p>
            </CDBBox>
            <CDBBox>
              <p className='h2 mb-4' style={{ fontWeight: '600' }}>
                Team Members
              </p>
              <CDBBox
                flex='column'
                display='flex'
                style={{ cursor: 'pointer', padding: '0' }}
              >
                <a href='https://github.com/SophoanMeas'>
                  Sophoan Meas
                </a>
                <a href='https://github.com/elsartz'>
                  Vardis Sartzetakis
                </a>
                <a href='/'>Ayva Valenti</a>
                <a href='/'>Cameron Karasiuk</a>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className='h2 mb-4' style={{ fontWeight: '600' }}>
                Contact Us
              </p>
              <CDBBox
                display='flex'
                flex='column'
                style={{ cursor: 'pointer', padding: '0' }}
              >
                <a href='/'>Reviews</a>
                <a href='/'>Sign Up</a>
                <a href='/'>Sign In</a>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox
            display='flex'
            justifyContent='center'
            style={{ width: '100%' }}
            className='mx-auto'
          >
            <CDBBtn flat color='dark' className='p-3'>
              <CDBIcon fab icon='facebook-f' />
            </CDBBtn>
            <CDBBtn flat color='dark' className='mx-3 p-3'>
              <CDBIcon fab icon='twitter' />
            </CDBBtn>
            <CDBBtn flat color='dark' className='p-3'>
              <CDBIcon fab icon='instagram' />
            </CDBBtn>
          </CDBBox>
          <small className='text-center mt-5'>
            <span>
              &copy;{new Date().getFullYear()} All rights reserved, The
              Digital-Minions Corp..
            </span>
          </small>
        </CDBBox>
      </CDBFooter>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  background-color: #5000ca;

  p {
    color: #ffff;
    text-decoration: none;

  }

  a {
    text-decoration: none;
    font-size: 20px;
    color: #ffff;
  }
  :link {
    text-decoration: none;
    color: #ffff;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    color: #ffff;
  }

  a:active {
    text-decoration: none;
  }

  span {
    color: #ffff;
    font-size: 20px;
  }
`;
