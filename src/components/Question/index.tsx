import * as React from "react";

import { QuizContext } from "../../context/quiz";
import { Button } from "../Button";
import { Options } from "../Options";
import { Container } from "./styles";

export const Question = () => {
  const [quizState, dispatch] = React.useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  React.useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  const onSelectOption = (option: string) => {
    dispatch({
      type: 'CHECK_ANSWER',
      payload: { answer: currentQuestion.answer, option}
    })
  }

  return (
    <Container>
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option: string) => (
          <Options option={option} 
          key={option}
          answer={currentQuestion.answer}
          selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {quizState.selectedAnswer && (
        <Button
          onClick={() => dispatch({ type: "CHANGE_QUESTIONS" })}
          name="Continuar"
        />
      )}
    </Container>
  );
};
