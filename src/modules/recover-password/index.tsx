import React from "react";

import PublicLayout from "@b8/modules/ui/public-layout";

import RecoverForm from "./components/recover-form";

function RecoverPassword() {
  return (
    <PublicLayout
      title={
        <>
          Olá, vamos te ajduar a
          <br /> recuperar sua senha.
        </>
      }
      columnLeft={<RecoverForm />}
    />
  );
}

export default RecoverPassword;
