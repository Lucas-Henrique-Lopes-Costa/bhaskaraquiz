/* eslint-disable linebreak-style */
import styled from 'styled-components';

//* Configuração do Conteiner com o Quiz
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 450px;
  padding-top: 45px;
  margin: auto 10%;

  img {
    height: 150px;
  }

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;
