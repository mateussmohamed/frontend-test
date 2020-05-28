import React from "react";
import { Button, ButtonProps, Box } from "rebass/styled-components";

type Props = ButtonProps & {
  variant?: string;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
};

function CustomButton({
  children,
  loading,
  icon,
  variant = "primary",
  ...props
}: Props) {
  return (
    <Button variant={variant} {...props}>
      {icon && (
        <Box as="span" display="inline-flex" mr={3}>
          {icon}
        </Box>
      )}
      {loading ? "Loading..." : children}
    </Button>
  );
}
export default CustomButton;
