import Button from '@mui/material/Button';
import { Link, Route } from 'react-router-dom';
import homeIcon from './home.svg';
import favIcon from './fav.svg';
import accIcon from './acc.svg';
import logo from './logo.png';
import './navbar.module.css';

import Login from '../../pages/Login';

export default function Navbar() {
    return <nav className='navbar'>
       <img className='logo'
                        src={logo}
                        alt='logo'
                    />
       <div className='navbarOptions'>
        <ul>
            <Button>     {/*variant="contained" */} 
                <li className='active'>
                    <a href='/Home'>home</a>

                    <span>home</span>
                    <img className='home'
                        src={homeIcon}
                        alt='home'
                    />

                </li>
            </Button>

            <Button>
                <li>
                    <a href='/fav'>favourites</a>

                    <span>favourites</span>
                    <img className='fav'
                        src={favIcon}
                        alt='favourites'
                    />

                </li>
            </Button>

            <Button>
                <li>
                    <a href='/login' element={<Login />}>log in</a>
                    {/* <Link to="/login" element={<Login />}>Login</Link> */}
                    {/* <Route 
                path="/login" 
                element={<Login />} 
              /> */}
                    <span>account</span>
                    <img className='acc'
                        src={accIcon}
                        alt='my account'
                    />

                </li>
            </Button>
        </ul>
        </div>
    </nav>

}

