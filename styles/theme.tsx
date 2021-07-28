import { createTheme } from '@material-ui/core/styles';

const defaultTheme = createTheme({
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

export const lightTheme = createTheme ({
  ...defaultTheme,
  palette: {
    type: "light",
    background: {
      paper: "#C1C1C1",
      default: 'f7f7f7'
    }
  },
});

export const darkTheme = createTheme({
  ...defaultTheme,
  palette: {
    type: "dark",
    background: {
      paper: "#303341",
      default: '#13151D'
    }
  },
});
