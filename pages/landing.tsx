import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default function Landing() {
  return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant = "h1">
          SCE Analytics
        </Typography>
        <Button style={{ maxWidth: '150px', maxHeight: '75px', minWidth: '150px', minHeight: '75px' }}>
          <h1>Login</h1>
        </Button>
        <br></br>
        <Button>Login2</Button>
      </Grid>
  );
}
