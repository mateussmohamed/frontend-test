import React from "react";

import PublicLayout from "@b8/modules/ui/public-layout";

import SignUpForm from "./components/signup-form";

function SignUp() {
  return (
    <PublicLayout
      title={
        <>
          Olá, vamos criar
          <br /> a sua conta b8one?
        </>
      }
      columnLeft={<SignUpForm />}
    />
  );
}

export default SignUp;
