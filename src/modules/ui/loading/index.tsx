import React from "react";

import { Container, Spinner } from "./styled";

function Loading(): JSX.Element {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}
export default Loading;
