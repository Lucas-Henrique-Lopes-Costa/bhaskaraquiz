/* eslint-disable func-names */
import React from 'react';

import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';

import Header from '../src/components/Header';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
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
// !O next interpreta o Home() como a cara da nossa página
export default function Home() {
  const router = useRouter(); // ?iniciando um holks => nao da refresh, porque muda só o "miolinhos"
  const [name, setName] = React.useState(''); // *Estado inicial

  return (
    // toda fez que aparecer alguma tag que tem a letra maiúscula, representa que CRIAMOS essa tag
    <QuizBackground backgroundImage={db.bg}>
      {/* meta-tags */}
      <Header />

      {/* Containers */}
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The Legend of Bhaskara</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Será que você será mellhor do que Pitágoras ??</p>

            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);

              // eslint-disable-next-line no-console
              console.log('Fazendo uma subção ocm o React!');

              // router manda para a próxima página
            }}
            >
              <input
                // quando mudar ele executa a função
                onChange={function (infosDoEvento) {
                  // eslint-disable-next-line no-console
                  console.log(infosDoEvento.target.value);

                  // !State => faz ou não o componete mudar, quando mudar ele muda apenas aquilo
                  setName(infosDoEvento.target.value);

                  // name = infosDoEvento.target.value;
                }}
                placeholder="Coloque o seu nome"
              />

              {/* Criando a validação */}
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
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
  );
}
