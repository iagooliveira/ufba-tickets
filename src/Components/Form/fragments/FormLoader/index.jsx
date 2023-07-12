import React, { useContext } from "react";
import { PulseLoader } from "react-spinners";

import { ThemeContext } from "styled-components";

import wrapper from "../../../Wrapper";

import { Container, LoadingText, LoadingPopup } from "./style";

const FormLoader = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <LoadingPopup>
        <LoadingText>Carregando</LoadingText>

        <div>
          <PulseLoader size="10px" margin="2px" color="blue" />
        </div>
      </LoadingPopup>
    </Container>
  );
};

export default wrapper(FormLoader, {
  namespace: "FORM_LOADING",
});
