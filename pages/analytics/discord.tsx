import CustomKeyMetric from "../../Components/CustomKeyMetric";
import { Grid } from "@material-ui/core";

export default function AnalyticsDiscord() {
  return (
    <div>
      <h1>Key Metrics</h1>
      <Grid
      container
      direction="row"
      // justify="flex-start"
      // alignItems="flex-start"
      >
        <CustomKeyMetric isUp = { true }/>
        <CustomKeyMetric isUp = { false }/>
        <CustomKeyMetric isUp = { false }/>
      </Grid>
      <h1>Graphs</h1>
    </div>
  );
}
