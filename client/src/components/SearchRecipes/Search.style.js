import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormStyle = styled.form`
  margin: 2rem;
  div {
    font-size: 25px;
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 2rem;
    color: white;
    padding: 1rem 3rem;
    margin-left: 0.5rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    min-width: 100vh;
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
  margin: 1rem;
  padding: 0;
  margin-left: 0.5rem;
  border-radius: 1rem;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    width: 80vh;
    height: 40px;
    border: none;
    outline: none;
  }
`;
