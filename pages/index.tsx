import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export default function Home() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h1">SCE Analytics</Typography>
      <a href="/landing">
        <Button style={{ maxWidth: '150px', maxHeight: '75px', minWidth: '150px', minHeight: '75px' }}>
          <h1>Login</h1>
        </Button>
      </a>
    </Grid>
  );
}
