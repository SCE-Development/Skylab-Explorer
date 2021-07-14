import { Button, Grid, Typography } from "@material-ui/core";
import { useSession, signIn, signOut } from "next-auth/client";

export default function Landing() {
  const [session, loading] = useSession();
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
        {
          (session)
          ? <div>
              <h1>Signed in as {session.user.email}</h1>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          : <Button style={{ maxWidth: '150px', maxHeight: '75px', minWidth: '150px', minHeight: '75px' }}>
              <button onClick={() => signIn()}>Sign in</button>
          </Button>
        }
      </Grid>
  );
}
