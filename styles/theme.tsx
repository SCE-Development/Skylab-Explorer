import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      contrastText: '#010101',
    },
    secondary: {
      main: '#303341',
      contrastText: '#E5E5E5',
    },
    background: {
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
