import React from 'react';
import { FooterWrap } from './footer.stc';

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

type FooterProps = {
  copy?: string;
};

const defaultProps: FooterProps = {
  copy: 'otherDefault',
};

Footer.defaultProps = defaultProps;

export default Footer;
