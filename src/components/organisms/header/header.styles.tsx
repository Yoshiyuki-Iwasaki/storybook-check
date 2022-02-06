import styled from 'styled-components';
import { device } from '../../particles/mediaQueries';

const headerColour = (props) => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.black) return '#131313';

  // If no variant is specified, return the white colour
  if (!props.variant) return props.theme.black;

  // Dynamically determine the background colour based on props
  let colour;
  switch (props.variant) {
    case 'fixedLight':
      colour = props.theme.white;
      break;
    case 'fixedDark':
      colour = props.theme.black;
      break;
    default:
      colour = props.theme.black;
      break;
  }

  return colour;
};

const headerPosition = (props) => {
  // Fallback value if we can't get access to props
  if (!props || !props.variant) return 'relative';

  // Dynamically determine the background colour based on props
  let position;
  switch (props.variant) {
    case 'fixedLight':
      position = 'absolute';
      break;
    case 'fixedDark':
      position = 'absolute';
      break;
    default:
      position = 'relative';
      break;
  }

  return position;
};

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: ${(props) => (props.variant ? `0` : undefined)};
  position: relative;
  top: ${(props) => (props.variant ? `0` : undefined)};
  max-width: 1000px;
  z-index: 9;
  color: ${(props) => headerColour(props)};
  button {
    margin: 0;
    display: inline-flex;
    align-items: center;
  }
  img {
    width: auto;
    height: 50px;
  }
  nav {
    padding: 0;
  }
  nav + nav {
    margin-left: auto;
  }
  svg {
    height: 24px;
    stroke: 1px solid ${(props) => props.theme.black};
  }
  .header__navigation {
    align-items: center;
    display: block;
    padding: 0;
    z-index: -1;
    color: ${(props) => props.theme.black};
    transition: 0.4s top ease;

    @media (max-width: 768px) {
      padding: 124px 30px 30px;
      position: fixed;
      top: -100%;
      background-color: ${(props) => props.theme.offWhite};
      width: 100%;
      height: 100%;
    }

    a + a {
      margin-left: 16px;
      margin-top: 0;
    }
    nav {
      padding-top: 24px;
      flex-direction: column;
      border-top: 1px solid ${(props) => props.theme.grey600};
    }
    nav + nav {
      margin-top: 24px;
    }
  }

  &.header--open {
    .header__navigation {
      top: 0;

      button {
        display: flex;
      }
    }
  }

  .header__buttonWrap {
    display: none;

    @media (max-width: 768px) {
      display: inline-flex;
    }
  }
`;

export default StyledHeader;
