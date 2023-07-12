import React from 'react';

import { Container, Error } from './style';

export const LoadingError = ({ error }) => (
  <Container>
    <Error>{error.message}</Error>
  </Container>
);
