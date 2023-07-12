import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  padding: ${props => props.theme.padding} 0;
  z-index: 1;
  min-height: ${props => `${props.minHeight || 0}px`};
`;

export const Text = styled.span`
  max-width: 70%;
  text-align: center;
  padding: ${props => props.theme.padding};
  max-width: 300px;

  ${props => css`
    color: ${props.color};
    border-radius: ${props.theme.borderRadius};
  `}
`;

export const Error = styled(Text)`
  color: ${props => props.theme.colors.quaternary[500]};
`;
