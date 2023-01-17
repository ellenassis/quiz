import * as React from 'react';

import { QuizContext } from '../../context/quiz';
import { Button } from '../Button';

import startImg from '../../assets/images/start-img.svg';

import { Container } from './styles';

export const Start = () => {
	const [quizState, dispatch] = React.useContext(QuizContext);

	return (
		<div>
			<Container>
				<h2>Seja bem-vindo(a)</h2>
				<p>Teste seus conhecimentos de JavaScript.</p>
				<p className='msg'>Clique no botão abaixo para começar</p>
				<Button onClick={() => dispatch({type: 'CHANGE_STATE'})} name='Iniciar' />
				<img src={startImg} alt="" />
			</Container>
		</div>
	)
}
