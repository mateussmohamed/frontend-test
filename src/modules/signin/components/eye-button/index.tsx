import React from "react";
import { Text } from "rebass/styled-components";

import { ReactComponent as EyeIcon } from "@b8/assets/images/eye.svg";

import { Button } from "./styled";

type Props = {
  handleClick: Function;
  toggle: boolean;
};

function EyeButton({ handleClick, toggle }: Props): JSX.Element {
  return (
    <Button
      onClick={() => {
        handleClick();
      }}
      type="button"
    >
      <EyeIcon fill={toggle ? "#0047FF" : "#AAA8B3"} />
      <Text ml={2} fontSize={2} color="#AAA8B3">
        Mostrar
      </Text>
    </Button>
  );
}

export default EyeButton;
