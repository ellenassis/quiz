import { Btn } from "./styles";

interface ButtonProps {
  name: String;
  onClick?: () => void 
}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <Btn onClick={props.onClick}>{props.name}</Btn>
    </div>
  );
};
