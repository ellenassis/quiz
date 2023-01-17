import * as React from "react";
import questions from '../data/questions';

interface initialStateProps {
  gameStage: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
  currentQuestion: number;
  score: Number;
  selectedAnswer: Boolean;
}

const STAGES = ["Start", "Playing", "End"];

const initialState: initialStateProps = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  selectedAnswer: false,
};

const quizReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = questions.sort((): any => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        reorderedQuestions,
      };

    case "CHANGE_QUESTIONS":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
        selectedAnswer: false
      };

    case "RESTART_GAME":
      return initialState;

    case "CHECK_ANSWER":
      if (state.selectedAnswer) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        selectedAnswer: option
      }

    default:
      return state;
  }
};

export const QuizContext = React.createContext({});

export const QuizProvider = ({ children }: any) => {
  const value = React.useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

//Typar corretamente
