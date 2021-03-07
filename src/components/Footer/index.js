import React from 'react';
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000099;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  height: 100px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <p>
        Criado por
        {' '}
        a
        {' '}
        <a href="https://lucas-henrique-lopes-costa.github.io/Lucas-Henrique-Lopes-Costa/">
          <span>Lucas</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
