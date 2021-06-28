import type { AppProps } from 'next/app';
import { makeStyles } from '@material-ui/styles';

// https://stackoverflow.com/questions/59145165/change-root-background-color-with-material-ui-theme
const useStyles = makeStyles({
  '@global': {
    body: {
      backgroundColor: '#111111',
      color: '#ffffff'
    }
},
});

function MyApp({ Component, pageProps }: AppProps) {
  const classes = useStyles();
  return(
      <Component {...pageProps} className = {classes}/>
  );
}

export default MyApp;
