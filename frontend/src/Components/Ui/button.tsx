// components/Ui/Button.tsx
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  bg?: string;
  text?: string;
  padding?: string;
  radius?: string;
  to?: string; // route to navigate
  children: React.ReactNode;
   className?: string; // Add this line
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ bg, theme }) => bg || theme.primary};
  color: ${({ text, theme }) => text || theme.buttonText};
  padding: ${({ padding }) => padding || "10px 20px"};
  border: none;
  border-radius: ${({ radius }) => radius || "8px"};
  cursor: pointer;
`;

export default function Button({ to, children, ...rest }: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to); // navigate to the route if provided
    }
  };

  return (
    <StyledButton {...rest} onClick={handleClick}>
      {children}
    </StyledButton>
  );
}
