import CustomKeyMetric from "../../Components/CustomKeyMetric";
import { Grid } from "@material-ui/core";

export default function AnalyticsDiscord() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <CustomKeyMetric isUp = { true }/>
      <CustomKeyMetric isUp = { false }/>
    </Grid>
  );
}
