/* eslint-disable func-names */
/* eslint-disable require-await */
/* eslint-disable func-style */
import { GetServerSideProps } from 'next';
import { DiscordUser } from '../types/auth';
import { parseUser } from '../utils/parse-user';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useDarkMode from 'use-dark-mode';


interface Props {
  user: DiscordUser;
}

export default function Landing(props: Props) {
  const { user } = props;
  const darkMode = useDarkMode();

  return (
    <div>
      <h1>
        Hey, {user.username}#{user.discriminator} token is {user.token}
      </h1>
      <Grid
        container
        direction="row-reverse"
        justifyContent="space-around"
        alignItems="flex-start"
        style={{ minWidth: '100vh' }}
      >
        <Grid item>
          <Button onClick={darkMode.toggle}>Dark/Light</Button>
         </Grid>
         <Grid item />
         <Grid item />
         <Grid item />
         <Grid item />
         <Grid item />
        </Grid>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="space-evenly"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={10}>
          <Typography variant="h1">SCE Analytics</Typography>
      </Grid>
      <Grid item>
        <Button>Login</Button>
      </Grid>
      <Grid item />
      <Grid item />
      <Grid item />
      <Grid item />
      <Grid item />
    </Grid>
     </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async function(ctx) {
  const user = parseUser(ctx);

  if (!user) {
    return {
      redirect: {
        destination: '/api/oauth',
        permanent: false,
      },
    };
  }

  return { props: { user } };
};
