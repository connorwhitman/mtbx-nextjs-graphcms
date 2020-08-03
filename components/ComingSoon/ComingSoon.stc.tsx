import styled from 'styled-components'

export const CoverWrap = styled.div`
${console.log(props => props.bg)}
  background: url(${props => props.bg}) no-repeat center center fixed; 
  background-size: cover;
`;

export const Tagline = styled.div``;