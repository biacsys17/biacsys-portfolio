import styled from "styled-components";

interface ServiceDisplayProps {
  bg?: string;
  text?: string;
  padding?: string;
  radius?: string;
  shadow?: string;
}

const ElevatedCard = styled.button<ServiceDisplayProps>`
  background-color: ${({ bg}) => bg || "#FFFFFF"};
  color: ${({ text, theme }) => text || theme.buttonText};
  padding: ${({ padding }) => padding || "10px 20px"};
  border: none;
  border-radius: ${({ radius }) => radius || "8px"};
  box-shadow: ${({ shadow }) => shadow || "0 4px 10px rgba(0,0,0,0.15)"};
  cursor: pointer;
`;

export default function ServiceDisplayCard(props: ServiceDisplayProps) {
  return (
    <ElevatedCard {...props}>
    </ElevatedCard>
  );
}