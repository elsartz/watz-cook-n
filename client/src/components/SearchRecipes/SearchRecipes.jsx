import React, { useState } from 'react';
import './SearchRecipes.module.css';
import searchIcon from './search.svg';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Search() {
    const [recipes, setRecipes] = useState('');
    const navigate = useNavigate();  

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/search/' + recipes);
      };

    return (
        <div className='search'>
            <div>
                <recipes className='recipes'
                    onChange={(e) => setRecipes(e.target.value)}
                    type='text'
                    value={recipes}
                />
            </div>
            <Button
                type='submit'
                size='large'
                variant='contained'
                onClick={submitHandler}
            >
                <span>Search</span>
                <img className='search'
                    src={searchIcon}
                    alt='search'
                />
            </Button>
            </div>
            );
}
