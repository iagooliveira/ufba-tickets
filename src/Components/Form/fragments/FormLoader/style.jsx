import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1201;
`;

export const LoadingPopup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;

  ${(props) => css`
    color: grey;
    background-color: white;
    border-radius: 100;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    transition: background-color 1s ease-in-out;
  `}
`;

export const LoadingText = styled.div`
  padding: ${(props) => `20px`};
`;
