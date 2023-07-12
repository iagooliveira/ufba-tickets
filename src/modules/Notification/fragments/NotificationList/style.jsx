import React from 'react';

import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  max-height: 100%;
  padding-top: 20px;
  right: 20px;
  text-align: justify;
  overflow: hidden;
  overflow-y: auto;
  z-index: 5;
`;

export const NotificationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  min-height: 100px;
  width: 300px;
  text-align: center;

  ${props => css`
    padding: ${props.theme.padding} 45px;
    margin-bottom: ${props.theme.margin};
    background-color: ${props.background};
    border-radius: ${props.theme.borderRadius};
    color: ${props.color};
    animation: ENTER_RIGHT ${props.theme.animationDuration};
  `}

  opacity: 0.9;
  position: relative;
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 0;
  position: absolute;
`;

export const CloseButton = styled.div`
  padding: ${props => props.theme.padding};
  cursor: pointer;
`;

const fontConfig = {
  // fontFamily,
  fontWeight: 600,
  lineHeight: '18px',
  fontSize: '14px'
};
export const messageStyles = {
  containerAnchorOriginTopRight: {
    top: '60px'
  },
  success: {
    ...fontConfig,
    backgroundColor: '#95F204 !important',
    color: '#006855 !important',
    minWidth: 'auto',
    maxWidth: '365px'
  },
  error: {
    ...fontConfig,
    backgroundColor: '#D9001B !important',
    minWidth: 'auto',
    maxWidth: '365px'
  },
  warning: { ...fontConfig, minWidth: 'auto', maxWidth: '365px' },
  info: { ...fontConfig, minWidth: 'auto', maxWidth: '365px' }
};

const SuccessIcon = styled.i`
  padding-top: 2px;
  padding-right: 8px;
  font-size: 17px;
  align-self: flex-start;
`;

const ErrorIcon = styled.i`
  margin-top: -3px;
  padding-right: 8px;
  height: 24px;
  align-self: flex-start;
  svg {
    width: 17px;
  }
`;

export const messageIcons = {
  success: <SuccessIcon className="fas fa-check" />,
  error: <ErrorIcon className="fas fa-check" />,
  warning: '',
  info: ''
};
