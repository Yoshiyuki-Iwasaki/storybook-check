import styled from 'styled-components';

const buttonBackground = (props) => {
  if (!props.variant) return props.theme.primary;
  let color = props.theme.primary;
  switch (props.variant) {
    case 'primary':
      color = props.theme.primary;
      break;
    case 'secondary':
      color = props.theme.secondary;
      break;
    case 'tertiary':
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
  display: inline-block;
  background: ${(props) => buttonBackground(props)};
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0);
  cursor: pointer;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.15s ease;
`;

export const StyledLinkedButton = styled(StyledButton).attrs({ as: 'a' })`
  background: ${(props) => props.theme.secondary};
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.p`
  padding: 0 3px;
`;
export const Text = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  line-height: 1;
`;
