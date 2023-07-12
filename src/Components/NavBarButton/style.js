import styled, { css } from 'styled-components';


export const StyledNavButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    background-color: transparent;
    border: none;
    color: #333333;
    padding: 6px 6px;
    font-weight: 500;
    font-size: 16px;
    &:hover{
        background-color: rgba(51, 51, 51, 0.09);
        border-radius: 8px;
    }
    &:active{
        background-color: rgba(51, 51, 51, 0.2);
    }
`
