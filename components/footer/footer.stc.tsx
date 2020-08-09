import styled, { ThemeProvider } from 'styled-components'

export const FooterWrap = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-variant: small-caps;

  color: ${props => props.theme.colors.primary || '#79c'};
  letter-spacing: ${props => props.theme.letterSpacing || '.15em'};
  font-size: ${props => props.theme.fontSize || '.75em'};
  font-weight: ${props => props.theme.fontWeight || 200};

  img {
    display: block;
    margin-top: 10px;
  }
`;