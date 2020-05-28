import React, { useState } from "react";
import { Box, Text } from "rebass/styled-components";
import { toast } from "react-toastify";

import { ReactComponent as GoogleIcon } from "@b8/assets/images/google-logo.svg";

import Link from "@b8/components/link";
import Form from "@b8/components/form";
import Field from "@b8/components/field";

import Button from "@b8/modules/ui/button";
import Divider from "@b8/modules/ui/divider";
import EyeButton from "../eye-button";

type Props = {
  onSignin: SubmitForm;
};

function SignInForm({ onSignin }: Props) {
  const [toggle, updateToggle] = useState(false);

  function handleGoogleSignin() {
    toast.info("Essa feature está em desenvolvimento.");
  }

  return (
    <Form onSubmit={onSignin}>
      <Field
        name="email"
        type="email"
        label="E-mail"
        placeholder="exemplo@email.com"
        validate={{ required: "Campo obrigatório." }}
      />
      <Field
        name="password"
        label="Senha"
        type={toggle ? "text" : "password"}
        recoverPassword={<Link to="/recover-password">Recuperar Senha</Link>}
        placeholder="Digite sua senha"
        validate={{ required: "Campo obrigatório." }}
        endAdornment={
          <EyeButton
            toggle={toggle}
            handleClick={() => updateToggle(!toggle)}
          />
        }
      />

      <Box width={1} px={2} mb={3}>
        <Button type="submit">Entrar</Button>

        <Divider />

        <Button
          onClick={handleGoogleSignin}
          type="button"
          variant="ghost"
          icon={<GoogleIcon />}
        >
          Entrar com o google
        </Button>

        <Text
          as="p"
          textAlign="center"
          fontSize={3}
          fontWeight="normal"
          mt={80}
        >
          Ainda nao possui uma conta?{" "}
          <Link to="/signup" fontWeight="bold">
            Crie agora
          </Link>
        </Text>
      </Box>
    </Form>
  );
}

export default SignInForm;
