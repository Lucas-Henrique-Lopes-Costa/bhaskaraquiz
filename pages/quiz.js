/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';

import Header from '../src/components/Header';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
// eslint-disable-next-line import/no-named-as-default
import QuizContainer from '../src/components/QuizContainer';
import AlternativesForm from '../src/components/AlternativesForm';
import Button from '../src/components/Button';
import BackLinkArrow from '../src/components/BackLinkArrow';
import Link from '../src/components/Link';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />

        Tela de Resultados:
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {/* {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
            }, 0)} */}
          {results.filter((x) => x).length}
          {' '}
          perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #
              {index + 1 < 10
                ? '0'
                : ''}
              {`${index + 1} `}
              Resultado:
              {/* Isso chama ternário */}
              {result === true
                ? ' Acertou⠀⠀🟢'
                : 'Errou⠀⠀⠀⠀🔴'}
            </li>
          ))}
        </ul>
      </Widget.Content>

      <Widget.Content>
        {`${name}`}
      </Widget.Content>

      <Link href="/">
        <Widget.Header>
          <a>
            Clique aqui para voltar para HOME
          </a>
        </Widget.Header>
      </Link>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content style={{ display: 'flex', justifyContent: 'center' }}>
        Aguarde um Instante...
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  // se o formulário foi enviado

  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  // eslint-disable-next-line max-len
  // ?quando você muda o estado e o componente vai renderizar novamente, logo quando a resposta e o imput forem iguais ele retorna como correto

  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
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

        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 15 * 100);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                kew={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>

          {isQuestionSubmited && isCorrect}
          {/* Se estiver correto você faz isso */}
          {isQuestionSubmited && !isCorrect}

        </AlternativesForm>
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

  // !QUANTIDADE DE ACERTO
  const [results, setResults] = React.useState([]);

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  // !COLOCANDO TEMPO PARA ENTRAR NAS QUESTÕES
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  // *começa com o LOADING

  /*
  ? [React chama de: Efeito || Effect]
  ? atualizado == willUpdate
  ? morre == willUnmount
  */ // *ELE VAI ocorrer

  // ?mudar a tela tem que passar um tempo definido
  React.useEffect(() => {
    // TODO: fetch() ... => verifica se pegou e codifica para o usuário
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
      // *usa um hooks para mudar a tela
    }, 1 * 1000);
    // ? nasce === didMount
  }, []);
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
      <Header />
      <QuizContainer>
        {/* Primeiro temos que ver o que está acontecendo na tela */}

        {/* Enquanto a tela está carrgando aparece  */}
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {/* Quando a tela está no ponto de mostrar o QUIZ */}
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}
