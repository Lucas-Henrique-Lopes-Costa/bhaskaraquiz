/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  // style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}

          <Button type="submit">
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const totalQuestions = db.questions.length;

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;

  const question = db.questions[questionIndex];

  // !COLOCANDO TEMPO PARA ENTRAR NAS QUESTÕES
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  // *começa com o LOADING

  /*
  ? [React chama de: Efeito || Effect]
  ? nasce === didMount
  ? atualizado == willUpdate
  ? morre == willUnmount
  */
  // TODO: ELE VAI ocorrer

  // ?mudar a tela tem que passar um tempo definido
  React.useEffect(() => {
    // TODO: fetch() ... => verifica se pegou e codifica para o usuário

    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
      // *usa um hooks para mudar a tela
    }, 1 * 1000);
  });
  // usa um efeito para que depois de 1 segundo chama o hooks =>
  // *entra no estado de "nasce = didMount"

  // !MUDANDO QUANDO APERTA O BOTÃO
  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {/* Primeiro temos que ver o que está acontecendo na tela */}

        {/* Enquanto a tela está carrgando aparece  */}
        {screenState === 'LOADING' && <LoadingWidget />}

        {/* Quando a tela está no ponto de mostrar o QUIZ */}
        {screenState === 'QUIZ' && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === 'RESULT' && <div>Você acertou X questões</div>}

      </QuizContainer>
    </QuizBackground>
  );
}
