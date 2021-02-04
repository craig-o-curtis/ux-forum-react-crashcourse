import colors from "./styles/colors";

const theme = {
  googleFont: "Roboto",
  fonts: {
    body: "Roboto, sans-serif",
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    text: colors.badass,
    background: colors.oxfordBlue,
  },
  styles: {
    h1: {
      borderBottom: `1px solid ${colors.badass}`,
      width: "100%",
      textAlign: "center",
      padding: "0.5rem",
      marginBottom: 0,
      fontWeight: 100,
      position: "relative",
      zIndex: 10,
      backgroundColor: colors.oxfordBlue,
      opacity: 0.95,
    },
    h2: { fontWeight: 100 },
    h3: { fontWeight: 100 },
    h4: { fontWeight: 100 },
    h5: { fontWeight: 100 },
    h6: { fontWeight: 100 },
    li: { textAlign: "left", lineHeight: 1.752 },
    blockquote: {
      fontStyle: "italic",
    },
    Header: {
      textAlign: "left",
      color: colors.xiketic,
      backgroundColor: colors.africanViolet,
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
    pre: {
      backgroundColor: "black",
    },
    code: {
      backgroundColor: "black",
    },
  },
};

export const stateTheme = {
  ...theme,
  colors: {
    text: colors.uranianBlue,
    background: colors.oxfordBlue,
  },
  styles: {
    h1: {
      borderBottom: `1px solid ${colors.uranianBlue}`,
    },
  },
};

export const reviewTheme = {
  ...theme,
  colors: {
    text: colors.sandyBrown,
    background: colors.oxfordBlue,
  },
  styles: {
    h1: {
      borderBottom: `1px solid ${colors.sandyBrown}`,
    },
  },
};

export default theme;
