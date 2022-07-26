import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 6px;
  color: #333;
  background: #eee;
  padding: 1rem;
  overflow-x: auto;

  
  &::-webkit-scrollbar {
    display: none;
  }

p{
  margin: 2rem;
font-size: 30px;
font-style: italic;
}
`;

export const Card = styled.div`
 background: #fff;
min-height: 25rem;
overflow: hidden;
position: relative;
border-radius: 6px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  overflow: hidden;
  flex: 1 0 250px;
  box-shadow: 0 1px 1rem -6px #000;

  &:hover {
    box-shadow: 0 4px 1rem -4px #000;
    transform: translateY(-3px);
  }

img {
  border-radius: 6px;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p {
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  width: 100%;
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}


`;

export const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
`;
