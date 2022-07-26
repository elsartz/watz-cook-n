
import { NavLink } from "react-router-dom";
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiSushis, GiBowlOfRice, GiNoodles, GiTacos, GiCroissant} from 'react-icons/gi';

import {List, SLink} from './Categories.style'

export default function Categories() {
    return (
        <List>
            <SLink to={'/cuisine/Italian'}><FaPizzaSlice/>
            <h4>Italian</h4>
            </SLink>
           
            <SLink to={'/cuisine/American'}>
            <FaHamburger/>
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/Thai'}>
            <GiNoodles/>
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cuisine/French'}>
            <GiCroissant/>
                <h4>French</h4>
            </SLink>
            <SLink to={'/cuisine/Chinese'}><GiBowlOfRice/>
                <h4>Chinese</h4>
            </SLink>
            <SLink to={'/cuisine/Japanese'}>
                <GiSushis/>
                <h4>Japanese</h4>
            </SLink>
            <SLink to={'/cuisine/Mexican'}>
                <GiTacos/>
                <h4>Mexican</h4>
            </SLink>
        </List>
    )
};

