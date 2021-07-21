import { createTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    allVariants: {
      fontWeight: 'bold',
    },
  },
  props: {
      MuiButton: {
        variant: "contained",
      }
    }
});

export const lightTheme = createMuiTheme ({
  ...defaultTheme,
  palette: {
    type: "light",
    background: {
      paper: "#C1C1C1",
      default: 'f7f7f7'
    }
  },
});

export const darkTheme = createMuiTheme({
  ...defaultTheme,
  palette: {
    type: "dark",
    background: {
      paper: "#303341",
      default: '#13151D'
    }
  },
});
