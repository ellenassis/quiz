import { useContext } from 'react';

import { Start } from './components/Start';
import { Question } from './components/Question';
import { EndGame } from './components/EndGame';
import { QuizContext } from './context/quiz';

import { GlobalStyle } from './styles/global';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='app'>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === 'Start' && <Start /> }
      {quizState.gameStage === 'Playing' && <Question /> }
      {quizState.gameStage === 'End' && <EndGame /> }
      <GlobalStyle />
    </div>
  )
}

export default App
