import React from "react";
import { Flex, Box, Heading } from "rebass/styled-components";

import { ReactComponent as Logo } from "@b8/assets/images/logo.svg";

import Loading from "../loading";

type Props = {
  title: React.ReactNode;
  columnLeft: React.ReactNode;
  columnRight?: React.ReactNode;
  loading?: boolean;
};

function PublicLayout({
  title,
  loading = false,
  columnLeft,
  columnRight,
}: Props) {
  return (
    <>
      <Flex>
        <Box width={[1, 1, 1 / 2]} height="100vh">
          <Box mx="auto" width={1} pt={5} px={6}>
            <Box mb={4}>
              <Logo />
            </Box>

            <Heading fontSize={7} color="dark" mb={5}>
              {title}
            </Heading>

            {columnLeft}
          </Box>
        </Box>
        <Box width={[1, 1, 1 / 2]} height="100vh" backgroundColor="primary">
          {columnRight}
        </Box>
      </Flex>

      {loading && <Loading />}
    </>
  );
}

export default PublicLayout;
