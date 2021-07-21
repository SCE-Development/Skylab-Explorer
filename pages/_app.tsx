/* eslint-disable react/jsx-props-no-spreading */
import { FC, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { lightTheme, darkTheme } from '../styles/theme';
import useDarkMode from 'use-dark-mode';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

const { value: isDark } = useDarkMode();
const themeConfig = isDark ? darkTheme : lightTheme;

  return (
    <>
      <Head>
        <title>Skylab</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        />
      </Head>
      <ThemeProvider theme={themeConfig}>
          <Box pl={7} pr={7} pt={5} pb={5}>
            <CssBaseline />
            <Component {...pageProps} />
          </Box>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
