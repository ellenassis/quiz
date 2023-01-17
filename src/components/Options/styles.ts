import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  opacity: 0.8;
  transition: 0.4s;
  cursor: pointer;
  background-color: ${props => props.correctAnswer ? 'var(--green)' : ''};
  background-color: ${props => props.wrongAnswer ? 'var(--red)' : ''};

  &:hover {
    opacity: 1;
  }

  p {
    padding: 1rem;
    color: var(--black);
    font-weight: 600;
  }

  .correct {
    background: var(--green);
    font-weight: bold;
  }

  .wrong {
    background: var(--dark-purple);
    opacity: 0.4;
  }

`;
