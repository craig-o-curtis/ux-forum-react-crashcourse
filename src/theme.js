import { reduce } from "lodash";
import colors from "./styles/colors";

export default {
  googleFont: "Roboto",
  fonts: {
    body: "Roboto, sans-serif",
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    text: colors.badass,
    background: colors.oxfordBlue,
    primary: "blue",
  },
  styles: {
    h1: {
      borderBottom: `1px solid ${colors.badass}`,
      width: "100%",
      textAlign: "center",
      padding: "0.5rem",
      marginBottom: 0,
      fontWeight: 100,
    },
    h2: { fontWeight: 100 },
    h3: { fontWeight: 100 },
    h4: { fontWeight: 100 },
    h5: { fontWeight: 100 },
    h6: { fontWeight: 100 },
    blockquote: {
      fontStyle: "italic",
    },
    Header: {
      textAlign: "left",
      color: colors.xiketic,
      backgroundColor: colors.sandyBrown,
      padding: "0.5rem",
      fontSize: "1.25rem",
    },
    Footer: {
      textAlign: "right",
      color: colors.africanViolet,
      padding: "0.5rem",
    },
    Slide: {
      backgroundColor: colors.oxfordBlue,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
  },
};
