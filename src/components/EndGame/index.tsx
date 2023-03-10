import React from "react";

import { QuizContext } from "../../context/quiz";
import { Button } from "../Button";

import congrats from "../../assets/images/congrats.svg";

import { Container } from "./styles";

export const EndGame = () => {
  const [quizState, dispatch] = React.useContext(QuizContext);

  return (
    <Container>
      <h2>Fim de jogo!</h2>
      <p>
        pontuação: <span>{quizState.score}</span>
      </p>
      <p>
        Você acertou <span>{quizState.score}</span> de{" "}
        {quizState.questions.length} perguntas.
      </p>
      {quizState.score <= 3 && (
        <p>Parece que foi difícil, melhor sorte da próxima vez.</p>
      )}
      {quizState.score > 3 && quizState.score < 6 ?
        <p>Continue tentando!</p> : ''
      }
      {quizState.score >= 6 && quizState.score < 10 ?
        <p>Muito bom!</p> : ''
      }
      {quizState.score === 10 ?
        <p>Você obteve uma pontuação perfeita, parabéns!!</p> : ''
      }
      <img src={congrats} alt="" />
      <Button
        onClick={() => dispatch({ type: "RESTART_GAME" })}
        name="Reiniciar"
      ></Button>
    </Container>
  );
};
