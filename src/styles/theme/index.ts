import merge from "lodash.merge";
import preset from "@rebass/preset";

export default merge(preset, {
  colors: {
    white: "#FFFFFF",
    primary: "#0047FF",
    darkBlue: "#0036c3",
    dark: "#1C1637",
    lightGray: "#D9D7E1",
    darkGray: "#666372",
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter",
    monospace: "Inter, monospace",
  },
  breakpoints: ["40em", "52em", "64em", "90em"],

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 40, 48, 64, 96],
  fontWeights: {
    light: 300,
    normal: 400,
    semi: 600,
    bold: 700,
  },
  forms: {
    input: {
      py: 3,
      px: 3,
      borderRadius: 8,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "lightgray",
      color: "dark",
      caretColor: "#0047FF",
      lineHeight: "24px",
      fontWeight: "normal",
      fontSize: 3,
      boxShadow:
        "0px 0px 4px rgba(0, 0, 0, 0.04), 0px 0px 12px rgba(0, 71, 255, 0.08)",

      "::placeholder": {
        color: "lightGray",
      },

      "&:focus, &:active": {
        outline: 0,
        borderColor: "primary",
      },

      "&:disabled": {
        color: "lightgray",
      },
    },
    label: {
      fontSize: 3,
      fontWeight: "normal",
      color: "dark",
      pb: 2,
    },
  },

  buttons: {
    primary: {
      fontSize: 4,
      height: 56,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "100%",
      borderRadius: 8,
      fontWeight: "bold",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "primary",
      bg: "primary",
      cursor: "pointer",

      "&:disabled": {
        bg: "lightgray",
        borderColor: "lightgray",
      },
    },
    ghost: {
      variant: "buttons.primary",
      bg: "white",
      color: "dark",
      borderColor: "#E8E7EF",
      fontWeight: "semi",
      boxShadow:
        "0px 2px 2px rgba(0, 0, 0, 0.02), 0px 8px 16px rgba(0, 0, 0, 0.02), inset 0px 2px 0px #FFFFFF",
    },
  },
});
