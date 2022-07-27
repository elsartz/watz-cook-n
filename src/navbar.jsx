import Button from '@mui/material/Button';
import homeIcon from './home.svg';
import favIcon from './fav.svg';
import accIcon from './acc.svg';
import logo from './logo.png';

export default function Navbar() {
    return <nav className='navbar'>
       <img className='logo'
                        src={logo}
                        alt='logo'
                    />
       <div className='navbarOptions'>
        <ul>
            <Button> 
                <li className='active'>
                    <a href='/Home'></a>

                    <span>home</span>
                    <img className='home'
                        src={homeIcon}
                        alt='home'
                    />

                </li>
            </Button>

            <Button>
                <li>
                    <a href='/fav'></a>

                    <span>favourites</span>
                    <img className='fav'
                        src={favIcon}
                        alt='favourites'
                    />

                </li>
            </Button>

            <Button>
                <li>
                   <span>log in</span>
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

