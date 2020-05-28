import { gql } from "apollo-boost";

export default gql`
  mutation signIn($input: SignInInput!) {
    signIn(input: $input) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;
