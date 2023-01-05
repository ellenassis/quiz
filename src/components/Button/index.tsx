import { Btn } from "./styles";

interface ButtonProps {
  name: String;
}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <Btn>{props.name}</Btn>
    </div>
  );
};
