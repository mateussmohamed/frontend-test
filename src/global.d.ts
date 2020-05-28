declare module "@rebass/preset";
declare module "@rebass/forms";
declare module "lodash.merge";
declare module "@rebass/forms/styled-components";

declare type SubmitForm = (data: FieldValues) => void;

declare type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  validate?: object;
  recoverPassword?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

declare type User = {
  id: string;
  username: string;
  email: string;
};

declare type SigninResponse = {
  token: string;
  user: User;
};

declare type SigninData = {
  signIn: SigninResponse;
};

declare type SigninInput = {
  email: string;
  password: string;
};

declare type SigninVariables = {
  input: SigninInput;
};
