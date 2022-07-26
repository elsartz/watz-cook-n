import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FormStyle, Layout, Container } from './Search.style';

export default function SearchRecipes() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/search/' + input);
  };

  return (
    <Container>
      <FormStyle onSubmit={submitHandler}>
        <div>
          <FaSearch />
          <input
            onChange={(e) => setInput(e.target.value)}
            type='text'
            value={input}
            label='Search'
          />
        </div>
        <Layout>
          <Button
            type='submit'
            size='large'
            variant='contained'
            onClick={submitHandler}
          >
            <span>Search</span>
          </Button>
        </Layout>
      </FormStyle>
    </Container>
  );
}
