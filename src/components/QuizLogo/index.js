/* eslint-disable linebreak-style */
import styled from 'styled-components';
import React from 'react';

function Logo() {
  return (
    <img alt="Logo" src="https://github.com/Lucas-Henrique-Lopes-Costa/bhaskaraquiz/blob/main/src/img/logo.png?raw=true" />
  );
}

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
