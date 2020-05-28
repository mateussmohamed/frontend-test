import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Box, Flex } from "rebass/styled-components";

import CloseButton from "@b8/modules/ui/close-button";

export const Container = styled(Slider)`
  display: flex;
  flex-direction: column-reverse;
`;

export const Dot = () => (
  <Box
    as="span"
    display="block"
    width={10}
    height={10}
    opacity={0.7}
    bg="white"
    sx={{
      cursor: "pointer",
      borderRadius: 9999,
    }}
  />
);

export const Dots = (dots: any) => (
  <Flex
    px={6}
    pb={5}
    justifyContent="space-between"
    alignItems="center"
    flexDirection="row"
    sx={{
      textAlign: "left",
      position: "relative",
      bottom: 0,
      ".slick-active span": {
        opacity: 1,
      },
    }}
  >
    <Box as="ul">{dots}</Box>
    <CloseButton onClick={() => false} />
  </Flex>
);
