import React, { useRef, useState, useEffect } from "react";
import { Box } from "rebass/styled-components";
import { useHistory } from "react-router-dom";

import { getUser } from "@b8/services/auth";

import { Container, Logo, Title } from "./styled";

function Welcome(): JSX.Element {
  const user = getUser();
  const history = useHistory();
  const [ready, setReady] = useState(false);
  const timerToClearSomewhere = useRef(false);

  useEffect(() => {
    // @ts-ignore
    timerToClearSomewhere.current = setTimeout(() => setReady(true), 3000);

    return () => {
      // @ts-ignore
      clearInterval(timerToClearSomewhere.current);
    };
  }, []);

  useEffect(() => {
    // @ts-ignore
    timerToClearSomewhere.current = setTimeout(() => {
      if (ready) {
        history.push("/home");
      }
    }, 2000);

    return () => {
      // @ts-ignore
      clearInterval(timerToClearSomewhere.current);
    };
  }, [history, ready]);

  return (
    <Container
      flexDirection="column"
      py={7}
      height="100vh"
      px={6}
      stopAnamination={ready}
    >
      <Box mb={4}>
        <Logo stopAnamination={ready} />
      </Box>
      <Box>
        <Title mb={2} fontSize={7} stopAnamination={ready}>
          {ready ? "Estamos prontos." : `Bem vindo, ${user.username}`}
        </Title>
        <Title mb={2} fontSize={3} stopAnamination={ready}>
          {ready ? "Boas vendas!" : "Estamos carregando suas informações."}
        </Title>
      </Box>
    </Container>
  );
}

export default Welcome;
