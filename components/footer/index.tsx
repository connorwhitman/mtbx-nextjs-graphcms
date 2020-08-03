import React from 'react'
import { FooterWrap } from './footer.stc'

type FooterProps = {
  copy?: string,
}

const Footer = ({ copy }: FooterProps) => {
  return (
    <FooterWrap>
        <a
          href="https://connorwhitman.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy}
          <img src="/logo.svg" alt="connorwhitman.com Logo" />
        </a>
      </FooterWrap>
  );
};

export default Footer