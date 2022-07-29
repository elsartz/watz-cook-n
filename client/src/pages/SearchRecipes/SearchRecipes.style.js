import styled from 'styled-components';

export const MainWrapper = styled.div`
background-color: ${({ theme }) => theme.colors.mainBg};
`;

export const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

export const FormStyle = styled.form`
margin: 2rem;
div {
  display:flex;
  justify-content: center;
  align-content: center;
  font-size: 25px;
  width: 100%;
  position: relative;

}

input {
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem;
  color: white;
  padding: 1rem 3rem;
  margin-left: 0.5rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  min-width: 50vh;

}
svg {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(100%, -50%);
  color: white;
}
`;

export const Layout = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
border-radius: 1rem;
background: linear-gradient(35deg, #373131, #203241);

span {
  font-size: 20px;
  font-weight: bold;
  color: #ffff;
  min-width: 45vh;
  border: none;
  outline: none;
}

`;

export const Grid = styled.div`
display: grid;
justify-content: center;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 2rem;
margin: 0 2rem 0 2rem;
`;

export const Card = styled.div`
  /* grid-template-rows: 210px 150px 20px; */
  background: #1d1d1d;
  color:white;
  text-align: justify;
  padding: 1.5rem;
  margin: 6rem 0 0 0;
  width: 100%;
  max-height: 100%;
  p {
  font-size:20px;
  text-align: center;
  margin-bottom: .5rem;
  color:white;
}

img {
  width: 100%;
  border-radius: 2rem;
  margin-bottom: 1rem;
  transition: all 200ms ease-in-out;
  overflow: hidden;
  flex: 1 0 250px;
  background: #ffff;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 1rem -4px #000;
    transform: translateY(-3px);
    box-shadow: 0 0 10px 5px;

  }
}

a {
  text-decoration: none;
}
h4 {
  text-align: center;
  padding: 1rem;
}

`;


export const Wave = styled.img`
 background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;