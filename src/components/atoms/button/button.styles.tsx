import styled from "styled-components";

const buttonBackground = props => {
  if (!props.variant) return props.theme.primary;
  let color = props.theme.primary;
  switch (props.variant) {
    case "primary":
      color = props.theme.primary;
      break;
    case "secondary":
      color = props.theme.secondary;
      break;
    case "tertiary":
      color = props.theme.tertiary;
      break;
    default:
      color = props.theme.primary;
      break;
  }
  return color;
};

export const StyledButton = styled.button`
  padding: 16px;

  background: ${props => buttonBackground(props)};
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0);
  color: ${props => props.theme.white};
  cursor: pointer;
  font-weight: 700;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
`;

export const StyledLinkedButton = styled(StyledButton).attrs({ as: "as" })`
  background: ${props => props.theme.secondary};
`;
