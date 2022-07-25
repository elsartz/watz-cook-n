import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiSushis, GiBowlOfRice, GiNoodles, GiTacos, GiCroissant} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import './categories.module.css';

export default function Categories() {
    return (
        <div className='cat'>
            <SLink to={'/cuisine/Italian'}>
                <img className='foodIcon'
                    src={FaPizzaSlice}
                    alt=''
                />
                <h4>Italian</h4>
            </SLink>
            <SLink to={'/cuisine/American'}>
                <img className='foodIcon'
                    src={FaHamburger}
                    alt=''
                />
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/Thai'}>
                <img className='foodIcon'
                src={GiNoodles}
                alt=''
            />
                <h4>Thai</h4>
            </SLink>
            <SLink to={'/cuisine/French'}>
                <img className='foodIcon'
                src={GiCroissant}
                alt=''
            />
                <h4>French</h4>
            </SLink>
            <SLink to={'/cuisine/Chinese'}>
                <img className='foodIcon'
                src={GiBowlOfRice}
                alt=''
            />
                <h4>Chinese</h4>
            </SLink>
            <SLink to={'/cuisine/Japanese'}>
                <img className='foodIcon'
                src={GiSushis}
                alt=''
            />
                <h4>Japanese</h4>
            </SLink>
            <SLink to={'/cuisine/Mexican'}>
                <img className='foodIcon'
                src={GiTacos}
                alt=''
            />
                <h4>Mexican</h4>
            </SLink>
        </div>
    )
};

const SLink = (NavLink)
   