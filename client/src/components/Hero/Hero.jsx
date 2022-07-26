import HeroBackground from '../Hero/hero.jpg'
import styled from 'styled-components';

export default function Hero() {
  return (
    <HeroContainer>
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>
          Welcome to Watz Cookin', a place to find any food recipes
        </HeroH1>
      </HeroContent>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  display: flex;
  position: relative;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.5) 100%,
      #000 80%
    ),
    url(${HeroBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: scroll;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

const HeroBg = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1000px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  font-size: 48px;
  text-align: center;

  @media screen and(max-width: 760px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

