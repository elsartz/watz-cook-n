import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 6px;
  color: #333;
  padding: 1rem;
  overflow-x: auto;
  margin: .5rem;

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
min-height: 20rem;
overflow: hidden;
position: relative;
border-radius: 6px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  overflow: hidden;
  flex: 1 0 250px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  &:hover {
    box-shadow: 0 4px 1rem -4px #000;
    transform: translateY(-3px);
  }

img {
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

export const Wave = styled.img`
 background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;