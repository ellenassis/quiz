import styled from "styled-components";

export const Btn = styled.button`
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 3rem;
  border: none;

  &:hover {
    background: linear-gradient(
      90deg,
      var(--secondary) 100%,
      var(--primary) 0%
    );
  }
`;
