import styled, { keyframes, css } from "styled-components";
import { Flex, Heading } from "rebass/styled-components";

import logoUri from "@b8/assets/images/logo.svg";

interface Props {
  readonly stopAnamination: boolean;
}

const shine = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const animation = css`
  animation: ${shine} 3s ease-in-out infinite;
`;

const animationHelper = css<Props>`
  ${({ stopAnamination }) => (stopAnamination ? "" : animation)};
`;

export const Container = styled(Flex)<Props>`
  background: linear-gradient(to right, #fff, #0047ff);
  background-size: 400% 400%;
  ${animationHelper}
`;

export const Title = styled(Heading)<Props>`
  background: linear-gradient(to right, #000, #fff);
  background-size: 400% 400%;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${animationHelper}
`;

export const Logo = styled.div<Props>`
  width: 120px;
  height: 120px;
  mask-image: url(${logoUri});
  mask-repeat: no-repeat;
  mask-size: 120px;
  mask-position: center;

  background: linear-gradient(to right, #0047ff, #fff);
  background-size: 400% 400%;

  ${animationHelper}
`;
