import React from "react";
import { FormContext, useForm } from "react-hook-form";

type Props = {
  children: React.ReactNode;
  onSubmit: SubmitForm;
};

const Form = ({ children, onSubmit }: Props) => {
  const methods = useForm();
  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormContext>
  );
};

export default Form;
