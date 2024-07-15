import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    900: "#091428",
  },
  secondary: {
    900: "#C89B3C",
  },
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  blue: {
    1: "#CDFAFA",
    2: "#0AC8B9",
    3: "#0397AB",
    4: "#005A82",
    5: "#0A323C",
    6: "#091428",
    7: "#0A1428"
  },
  gold: {
    1: "#F0E6D2",
    2: "#C8AA6E",
    3: "#C8AA6E",
    4: "#C89B3C",
    5: "#785A28",
    6: "#463714",
    7: "#32281E"
  },
  grey: {
    1: "#A09B8C",
    2: "#5B5A56",
    3: "#3C3C41",
    4: "#1E2328",
    5: "#010A13"
  },
  blue_gradient: {
    1: "#091428",
    2: "#0A1428"
  },
  gold_gradient: {
    1: "#785A28",
    2: "#C89B3C"
  },
  cyan_gradient: {
    1: "#005A82",
    2: "#0AC8B9"
  },
};

const theme = extendTheme({ colors });

export default theme;