import styled from 'styled-components';

export const CoverWrap = styled.div`
  background: url(${(props) => props.bg}) no-repeat center center fixed;
  background-size: cover;
  height: calc(100vh - 100px);
`;

export const Tagline = styled.div`
  color: #fafafa;
  white-space: nowrap;
  font-size: 3em;
  line-height: 100px;
  font-weight: 700;
  padding: 0 50px;
  padding-top: 20vh;
  h1,
  h2 {
    padding: 0;
    margin: 0;
  }

  h1 {
    letter-spacing: 25px;
    color: rgba(255, 82, 83, 1);
    mix-blend-mode: screen;
  }

  h2 {
    padding-top: 1em;
    letter-spacing: 20px;
    font-weight: 400;
    text-transform: uppercase;
  }

  @media (max-width: 770px) {
    h2 {
      padding-top: 0;
      font-size: 3rem;
      font-weight: 600;
    }
  }
  @media (max-width: 625px) {
    padding-top: 10vh;
    h2 {
      font-size: 1.5rem;
      letter-spacing: 10px;
    }
  }
`;

export const NumberWrap = styled.div`
  z-index: 10;
  font-size: 12em;
  font-weight: 700;
  color: rgba(255, 82, 83, 1);
  letter-spacing: -5px;
  white-space: nowrap;
  min-width: 300px;
  max-width: 300px;
  transform-origin: 50% 50% 0px;
  filter: blur(0px);
  display: inline-block;
  transition: none 0s ease 0s;
  text-align: left;

  span {
    text-align: left;
    z-index: 11;
    font-size: 3.5rem;
    letter-spacing: -2px;
    color: #fafafaaa;
    display: block;
    position: absolute;
    top: 37%;
    left: 67%;
    transform: translateX(-50%) translateY(-50%);
  }

  @media (max-width: 1280px) {
    font-size: 10em;
    min-width: 23vw;
    max-width: 23vw;

    span {
      font-size: 2.7rem;
      letter-spacing: -2px;
      top: 37%;
      left: 68%;
    }
  }

  @media (max-width: 1024px) {
    font-size: 7em;
    min-width: 23vw;
    max-width: 23vw;
    span {
      font-size: 2rem;
      letter-spacing: -2px;
      top: 35%;
      left: 63%;
    }
  }
  @media (max-width: 770px) {
    font-size: 6em;
    min-width: 23vw;
    max-width: 23vw;
    span {
      font-size: 1.5rem;
      letter-spacing: -2px;
      top: 38%;
      left: 62%;
    }
  }
  @media (max-width: 625px) {
    font-size: 6em;
    min-width: 120px;
    max-width: 120px;
    display: block;
    span {
      font-size: 1.5rem;
      letter-spacing: -2px;
      top: 90%;
      left: 75%;
    }
  }
`;

export const CountdownWrapper = styled.div`
  margin: 0 auto;
  padding-top: 0;
  padding-left: 50px;
  mix-blend-mode: screen;

  @media (max-width: 625px) {
    padding-top: 5vh;
  }
`;
