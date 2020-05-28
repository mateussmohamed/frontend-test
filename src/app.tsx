import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import client from "@b8/apollo/client";

import theme from "@b8/styles/theme";
import GlobalStyle from "@b8/styles/global";

import Routes from "@b8/routes";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </ThemeProvider>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
