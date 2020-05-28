import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Text, TextProps } from "rebass/styled-components";

type Props = TextProps & {
  to: string;
  children: React.ReactNode;
};

const Wrapper = styled(RouterLink)`
  text-decoration: none;
`;

function Link({ children, to, ...props }: Props): JSX.Element {
  return (
    <Wrapper to={to}>
      <Text
        as="span"
        color="primary"
        sx={{ ":hover": { color: "darkBlue", textDecoration: "underline" } }}
        fontSize={3}
        {...props}
      >
        {children}
      </Text>
    </Wrapper>
  );
}

export default Link;
