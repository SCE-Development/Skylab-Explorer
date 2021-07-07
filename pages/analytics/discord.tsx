<<<<<<< HEAD
import CustomKeyMetric from '../../Components/CustomKeyMetric';
import CustomLineChart from '../../Components/CustomLineChart';
import { Grid } from '@material-ui/core';
import { useState } from 'react';
=======
import CustomKeyMetric from "../../Components/CustomKeyMetric";
import CustomLineChart from "../../Components/CustomLineChart";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import DiscordAppBar from "../../Components/DiscordAppBar";
>>>>>>> implemented theme and headers (#30)

export default function AnalyticsDiscord() {
  const [data, setData] = useState([
    { date: '11/28', quantity: 10 },
    { date: '11/29', quantity: 9 },
    { date: '11/30', quantity: 6 },
    { date: '12/1', quantity: 4 },
    { date: '12/2', quantity: 15 },
  ]);
  return (
    <div>
      <DiscordAppBar />
      <h1>SCE Analytics</h1>
      <h1>Key Metrics</h1>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
        <CustomKeyMetric title="Commands Made" number={34} isUp={true} />
        <CustomKeyMetric title="Successful Commands" number={45} isUp={false} />
        <CustomKeyMetric title="Failed Commands" isUp={false} />
      </Grid>
      <h1>Graphs</h1>
      <CustomLineChart
        title={'Visits'}
        total="3000"
        data={data}
        dataKey="quantity"
        isYAxis={false}
        width={400}
        height={500}
        xLabel="date"
      />
    </div>
  );
}
