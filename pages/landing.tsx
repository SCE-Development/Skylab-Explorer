import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  roundCorder: {
    borderRadius: '40px'
  }
});

export default function Landing() {
  const classes = useStyles();
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
        <button
          type = "button"
          className = {classes.roundCorder}
        ><Typography variant = "h4">Login</Typography></button>
      </Grid>
  );
}
