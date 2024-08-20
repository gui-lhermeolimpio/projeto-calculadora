import { ButtonContainer } from "./styles";

const Button = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
      <div></div>
    </ButtonContainer>
  );
};
export default Button;
