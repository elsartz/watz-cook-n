// @import url('https://fonts.googleapis.com/css2?family=Varela&family=Varela+Round&display=swap');
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  font-size: 2rem;


`;

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 25px;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;
