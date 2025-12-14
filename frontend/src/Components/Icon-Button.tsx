import React from "react";
import styled from "styled-components";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  size?: number;
  variant?: "primary" | "secondary";
}

const StyledButton = styled.button<{ size: number; variant: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.primary : "#e5e5e5"};

  color: ${({ theme }) => theme.textColor};

  transition: 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  size = 40,
  variant = "primary",
}) => {
  return (
    <StyledButton onClick={onClick} size={size} variant={variant}>
      {icon}
    </StyledButton>
  );
};

export default IconButton;
