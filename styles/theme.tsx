import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      // primary color: white
      main: '#FFFFFF',
      contrastText: '#010101',
    },
    secondary: {
      // secondary color:  dark grayish blue
      main: '#303341',
      contrastText: '#E5E5E5',
    },
    background: {
      // default background: black
       default: '#000000',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    allVariants: {
     color: '#CDCDCD',
      fontWeight: 'bold',
    },
  },
  shape: {
    // rounded buttons
    borderRadius: 100,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        paddingLeft: 20,
        paddingRight: 20,
      }
    },
  },
  props: {
    MuiButton: {
      variant: "contained",
    }
  }
});

export default theme;
