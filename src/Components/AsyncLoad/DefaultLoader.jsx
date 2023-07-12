import React, { useContext } from "react";
import { BarLoader } from "react-spinners";

import { ThemeContext } from "styled-components";

import { Container } from "./style";

export const DefaultLoader = ({ color, minHeight }) => {
  if (!color) color = "blue";

  return (
    <Container minHeight={minHeight}>
      <BarLoader width="30%" color={color} />
    </Container>
  );
};
