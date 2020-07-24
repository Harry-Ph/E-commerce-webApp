import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f00"
    },
    secondary: {
      main: "#0f0"
    }
  },
  typography: {
    fontFamily: "Comic Sans MS",
    body2: {
      fontFamily: "Times New Roman",
      fontSize: "1.1rem"
    },
    h5:{
      fontFamily: "Raleway",
      fontWeight: 400,
      fontSize: "1.1rem"
    }
  },
  shape: {
    borderRadius: 30
  },
  spacing: 8,
  overrides: {
    MuiTypography: {
      root: {
        textOverflow: 'ellipsis',
        overflow: 'hidden !important',
        maxHeight: '200px'
      }
    },
    MuiCardMedia : {
      root: {
        backgroundSize: 'contain'
      }
    },
    MuiFilledInput: {
      root: {
        backgroundColor: '#69807D',
        width: '80vw',
        marginTop: '1.5rem'
      },
    },
    MuiInputLabel: {
      root: {
        color: "#FFFBD4"
      }
    },
    MuiTextField: {
      root: {}
    },
    MuiButton: {
      root: {
        textTransform: "none",
        padding: "20px"
      },
      fullWidth: {
        maxWidth: "300px"
      }
    }
  },
  props: {
    MuiButton: {
      disableRipple: true,
      variant: "contained",
      color: "primary"
    },
    MuiCheckbox: {
      disableRipple: true
    },
    MuiTextField: {
      variant: "filled",
      InputLabelProps: {
        shrink: true
      }
    },
    MuiPaper: {
      elevation: 12
    },
    MuiCard: {
      elevation: 12
    }
  }
});

export default theme;