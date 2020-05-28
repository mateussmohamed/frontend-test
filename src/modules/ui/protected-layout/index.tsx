import React from "react";
import { Flex, Box, Heading } from "rebass/styled-components";

import { ReactComponent as Logo } from "@b8/assets/images/logo.svg";

import Loading from "../loading";

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
  loading?: boolean;
};

function PublicLayout({ children, title, loading = false }: Props) {
  return (
    <>
      <Flex>
        <Box width={100} height="100vh" bg="darkBlue">
          <Flex py={4} width={[1]} justifyContent="center">
            <Logo fill="#fff" />
          </Flex>
        </Box>

        <Flex flexDirection="column" flex={1} height="100vh">
          <Box width={[1]} py={4} px={4} height={100} bg="primary">
            <Heading fontSize={5} color="white">
              {title}
            </Heading>
          </Box>
          <Box width={[1]} py={4} px={6} height="100vh">
            {children}
          </Box>
        </Flex>
      </Flex>

      {loading && <Loading />}
    </>
  );
}

export default PublicLayout;
