import React from "react";
import { Box, Text } from "rebass/styled-components";
import { Label, Input } from "@rebass/forms/styled-components";
import { ErrorMessage, useFormContext } from "react-hook-form";

import { InputContainer, EndAdornment } from "./styled";

function PasswordField({
  name,
  label,
  type,
  disabled,
  validate,
  recoverPassword,
  endAdornment,
  placeholder = "Your text goes here",
}: FieldProps): JSX.Element {
  const { register, errors } = useFormContext();
  const hasError = errors[name] || false;

  return (
    <Box width={1} px={2} mb={4}>
      <Label htmlFor={name} justifyContent="space-between">
        {label}

        {recoverPassword}
      </Label>
      <InputContainer>
        <Input
          placeholder={placeholder}
          disabled={disabled}
          ref={register({ ...validate })}
          type={type}
          id={name}
          name={name}
          mb={1}
          sx={{
            borderColor: hasError ? "red" : "lightGray",
            "&:focus, &:active": {
              borderColor: hasError
                ? "red"
                : disabled
                ? "lightGray"
                : "primary",
            },
          }}
        />

        <EndAdornment>{endAdornment}</EndAdornment>

        <ErrorMessage errors={errors} name={name}>
          {({ message }): JSX.Element => (
            <Text px={1} fontSize={1} color={hasError ? "red" : "darkGray"}>
              {message}
            </Text>
          )}
        </ErrorMessage>
      </InputContainer>
    </Box>
  );
}

export default PasswordField;
