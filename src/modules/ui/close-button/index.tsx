import React from "react";
import { ReactComponent as CloseIcon } from "@b8/assets/images/close.svg";

import { Wrapper } from "./styled";

interface Props {
  onClick: () => {};
}

function CloseButton({ onClick }: Props): JSX.Element {
  return (
    <Wrapper onClick={onClick}>
      <CloseIcon />
    </Wrapper>
  );
}

export default CloseButton;
