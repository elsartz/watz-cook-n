
import React, {useState} from 'react'
import { Routes, Route } from "react-router-dom";
import MobileSideBar from '../../components/MobileSidebar/MobileSideBar'
import Navbar from '../../components/Navbar/Navbar'
import styled
 from 'styled-components'

export default function Home (){
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

    return ( 
<>
<MobileSideBar isOpen={isOpen} toggleMenu={toggleMenu}/>
<Routes>
<Navbar toggleMenu={toggleMenu}/>
  </Routes>
  <ProjectContainer/>
  {/* <Footer/> */}
</>
    )
}

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000000;
    `