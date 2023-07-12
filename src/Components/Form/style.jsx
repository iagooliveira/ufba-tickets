import styled from 'styled-components';

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${props => props.maxWidth};
`;
