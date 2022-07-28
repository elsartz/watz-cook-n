import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './MobileSideBar.style'

export default function MobileSideBar({isOpen, toggleMenu}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleMenu}>
      <Icon onClick={toggleMenu}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about">About
          </SidebarLink>
          <SidebarLink to="/profile">Profile
          </SidebarLink>
          <SidebarLink to="/contact">Contact
          </SidebarLink>
          <SidebarLink to="/resume">Resume
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
