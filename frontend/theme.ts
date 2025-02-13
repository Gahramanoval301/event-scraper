import { createTheme as _createTheme } from "@mui/material/styles";
const theme = () =>
  _createTheme({
    palette: {
      primary: {
        light: "#FF7F7F",
        main: "#880808",
        dark: "#6b0505",
      },
      secondary: {
        light: "#fff",
        main: "#eee",
        dark: "#c2c2c2",
      },
    },
    typography: {
      h6: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h3: {
        fontWeight: 600,
      },
      h2: {
        fontWeight: 600,
      },
    },
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {},
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "xl",
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            backgroundColor: "#f5e4e4",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "outlined",
        },
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            padding: "0 !important",
            borderRadius: "8px !important",
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
          fullWidth: true,
        },
        styleOverrides: {
          root: {
            marginBottom: "0 !important",
          },
        },
      },
      MuiStack: {
        defaultProps: {
          flexDirection: "row",
        },
      },
    },
  });

export default theme;