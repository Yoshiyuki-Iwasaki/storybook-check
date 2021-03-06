import styled from 'styled-components';

export const StyledNavigation = styled.button`
  padding: 16px;
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'vertical' ? 'column' : undefined};

  a + a {
    margin-left: ${(props) =>
      props.direction === 'horizontal' ? '24px' : undefined};
    margin-top: ${(props) =>
      props.direction === 'vertical' ? '24px' : undefined};
  }

  .nav__icon {
    width: 25px;
  }

  .nav__text {
    font-size: 14px;
    font-weight: 500;
  }
`;
