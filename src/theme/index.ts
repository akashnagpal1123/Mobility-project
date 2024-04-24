import { Text, Heading, Container } from "./components";
import { colors, fonts } from "./foundations";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors,
  fonts,
  components: { Text, Heading, Container },
});
export default theme;
