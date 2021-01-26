import styled from "styled-components";
import db from '../db.json';

import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget/index.js'
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

/*
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
` //? aqui ele trabalha com CSS dinâmico

//* os dois são os mesmos, só que o de cima faz essa função debaixo dos panos

// function Title(props) {
//   // propcidades => propriedades
//   return (
//     // nesse caso, quando ele receber algo no Home(), essa função já recebe aquela propriedade
//     <h1> 
//       {props.children}
//     </h1>
//   )
// }
*/

// TODO: Isso é JavaScript "empurrando o CSS"
//* Configuração do Background
const BackgroundImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; //? como se estivesse usando uma função que pode receber variáveis

//* Configuração do Conteiner com o Quiz
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

// TODO: Isso é Next
//! o next interpreta o Home() como a cara da nossa página
export default function Home() {
  return (
    /*
    //<Title>My page</Title>// toda fez que aparecer alguma tag que tem a letra maiúscula, representa que CRIAMOS essa tag 
    */

    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
              <h1>The Legend of Bhaskara</h1>
          </Widget.Header>
          <Widget.Content>  
            <p>Será que você será mellhor do que Pitágoras ??</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
              <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>  
            <p>Aqui alguns outros Quizes muito maneiros de alguns de meus colegas!!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      <GitHubCorner projectUrl="https://github.com/Lucas-Henrique-Lopes-Costa/bhaskaraquiz" />
      </QuizContainer>
    </QuizBackground>

  )
  
}
