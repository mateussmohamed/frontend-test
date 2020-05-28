import ApolloClient from "apollo-boost";
import fetch from "isomorphic-unfetch";

export default new ApolloClient({
  fetch,
  uri: process.env.REACT_APP_PLUGONE_API,
  onError({ graphQLErrors, networkError, response, operation }) {
    try {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );

      if (networkError) console.log(`[Network error]: ${networkError}`);
    } catch (error) {
      console.log(`[Error]: ${error}`);
    }
  },
});
