import React from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";

import { setUser, setToken } from "@b8/services/auth";

import PublicLayout from "@b8/modules/ui/public-layout";

import SignInForm from "./components/signin-form";
import Carousel from "./components/carousel";

import SIGN_IN from "./graphql/signin";

function SignIn() {
  const history = useHistory();
  const [handleSignin, { loading }] = useMutation<SigninData, SigninVariables>(
    SIGN_IN
  );

  async function onSignIn(formData: SigninInput) {
    try {
      const { data } = await handleSignin({
        variables: {
          input: {
            ...formData,
          },
        },
      });

      console.log({ data });

      const token = data?.signIn.token;
      const user = data?.signIn.user;

      if (token && user) {
        setToken(token);
        setUser(user);

        history.push("/welcome");
      }
    } catch (error) {
      console.log({ error });
      if (error.graphQLErrors) {
        toast.error(error.graphQLErrors[0].message);
      }
    }
  }

  return (
    <PublicLayout
      loading={loading}
      title={
        <>
          Olá, Que bom ter
          <br /> você de volta.
        </>
      }
      columnLeft={<SignInForm onSignin={onSignIn} />}
      columnRight={<Carousel />}
    />
  );
}

export default SignIn;
