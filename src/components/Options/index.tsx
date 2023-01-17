import React from "react";

import { QuizContext } from "../../context/quiz";
import { Container } from "./styles";

interface OptionsProps {
  option: string;
  answer: string;
  selectOption: () => void;
}

export const Options = ({ option, answer, selectOption }: OptionsProps) => {
  const [quizState, dispatch] = React.useContext(QuizContext);

  return (
    <Container correctAnswer={quizState.selectedAnswer && option === answer}
    wrongAnswer={quizState.selectedAnswer && option !== answer}
    onClick={() => selectOption()}>
      <p>{option}</p>
    </Container>
  );
};
