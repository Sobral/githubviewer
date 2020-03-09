import styled, { keyframes, css } from 'styled-components';

import { defaultColors } from './global';

// I know, it is a crazy idea, but since I didnt find a good example to solve it
// I decide to deal with it this way
// https://github.com/styled-components/styled-components/issues/1198
const forcingBool = { false: false, true: true };

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  max-width: 750px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 20 rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    display: flex;
    align-items: center;

    svg {
      margin-right: 20px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 10px;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 2px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: forcingBool[props.loading] || props.emptyInput,
}))`
  background: ${defaultColors.rocketSeatPurple};
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    forcingBool[props.loading] &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const RepoContainer = styled.div`
  max-width: 750px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 20 rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 10px auto;

  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;
