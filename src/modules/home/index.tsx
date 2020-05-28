import React from "react";
import { Button, Heading } from "rebass/styled-components";
import { useHistory } from "react-router-dom";
import ProtectedLayout from "@b8/modules/ui/protected-layout";

import { getUser, logout } from "@b8/services/auth";

function Home() {
  const user = getUser();
  const history = useHistory();

  function handleLogout() {
    history.replace("/signin");
    logout();
  }

  return (
    <ProtectedLayout title={`Home - ${user.email}`}>
      <Heading>Boas vendas! =)</Heading>

      <Button onClick={handleLogout} mt={4} minWidth={120}>
        Sair
      </Button>
    </ProtectedLayout>
  );
}

export default Home;
