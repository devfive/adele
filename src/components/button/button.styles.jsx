import styled from 'styled-components';
import { button } from '../../style_tokens/tokens';

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 40px;
  min-height: 40px;
  width: 100%;
  max-width: 200px;
  background-color: ${props => (props.accent === true ? button.colors.accent.backgroundColor : button.colors.default.backgroundColor)};
  border-radius: ${button.border.radius};
  border: 1px solid ${props => (props.accent === true ? button.colors.accent.backgroundColor : button.colors.default.backgroundColor)};

  font-family: ${button.typography.fontFamily};
  font-size: ${button.typography.size};
  font-weight: ${button.typography.weight};
  color: ${props => (props.accent === true ? button.colors.accent.color : button.colors.default.color)};
  text-decoration: none;

  cursor: pointer;

  &:hover {
    background-color: ${props => (props.accent === true ? button.colors.accent.hover : button.colors.default.hover)};
    border-color: ${props => (props.accent === true ? button.colors.accent.hover : button.colors.default.hover)};
    box-shadow: 4px 4px 20px rgba(179, 211, 255, 0.6);
  }
  &:active {
    background-color: ${props => (props.accent === true ? button.colors.accent.active : button.colors.default.active)};
    box-shadow: 'none';
  }

  &:focus {
    outline: none;
    background-color: ${props => (props.accent === true ? button.colors.accent.hover : button.colors.default.hover)};
  }

  transition: all ease-in 0.1s;
`;

const StyledButton = StyledLink.withComponent('button');

export { StyledButton, StyledLink };
