import styled from 'styled-components';
import Kitchen from '../../assets/images/kitchen.jpg'

export const Wrapper = styled.div`

  margin-bottom: 5rem;
  padding: 2rem;
  display: flex;
  min-height: 90vh;
  h2 {
    margin-bottom: 2rem;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #ffff;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

export const CardWrapper = styled.div`
 
  `;

export const Card = styled.div`
  border-radius: 1.5rem;
  height: 450px;
  margin: 20px auto;
  width: 520px;
  overflow: hidden;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  position: relative;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  background:linear-gradient(135deg, #65799b 0%,#5e2563 100%);
  cursor: pointer;
  
  :hover {
    height: 760px;
    opacity: 1;
  }

  img {
    border: 3px solid #fff;
    border-radius: 5%;
    display: block;
    margin: 10px auto;
    width: 420px;
  }

  p {
    color: #999;
    font-size: 14px;
    font-style: italic;
    text-align: center;
    font-family: 'Open Sans';
  }

  h2 {
    text-align: center;
    color: #ffff;
  }
  
  h3{
    margin: .5rem;
    font-size: 20px;
    text-align: center;
    color: #ffff;
    /* line-height: 5px; */
  }
  p{
    font-size: 25px;
    text-align: center;
    color: #ffff;
  }

`;

export const Title = styled.div`
  header h2 {
    color: #ffff;
    font-family: 'Open Sans';
    padding-bottom: 2rem;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 1.5rem;
    text-align: center;
    line-height: 1;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #ffff;
  border: 2px solid black;
  margin-right: 2rem;
  margin-bottom: 3rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const Info = styled.div`
  margin-left: 10rem;
  max-width: 50%;

  h2{
    margin-top: 1.5rem;
    color: #ffff;
  }
  h3{
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #ffff;
  }
  a{
    text-decoration: none;
    color: #f02fc2;
  }
  li{
    text-decoration: none;
    color: #ffff;
  }
`;

export const Background = styled.div`
 background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.5) 100%,
      #000 80%
    ),
    url(${Kitchen});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: scroll;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
`