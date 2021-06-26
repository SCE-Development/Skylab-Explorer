import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import CustomLineChart from '../Components/CustomLineChart';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function Home() {
  const [visits, setVisits] = useState([
    { date: '11/28', quantity: 10 },
    { date: '11/29', quantity: 9 },
    { date: '11/30', quantity: 6 },
    { date: '12/1', quantity: 4 },
    { date: '12/2', quantity: 15 },
  ]);

  return (
    // Building dashboard
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid
        item container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant = "h3">
          Dashboard
          </Typography>
        </Grid>
        <Grid item>
          <Select>
            <MenuItem value = {'last seven days'}>Last seven days</MenuItem>
            <MenuItem value = {'last 2 weeks'}>Last 2 weeks</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Grid item>
        <CustomLineChart
          title = {'Visits'}
          data = {visits}
          xLabel = "date"
          dataKey = "quantity"
        />
      </Grid>
      <Grid
        item container
        direction="row"
        justify="flex-start"
        alignItems="center">
        <CustomLineChart
          title = {'Visits'}
          data = {visits}
          dataKey = "quantity"
          isYAxis = {false}
          width = {200}
          height = {100}
        />
        <CustomLineChart
          title = {'Unique visitors'}
          data = {visits}
          dataKey = "quantity"
          isYAxis = {false}
          width = {200}
          height = {100}
        />
        <CustomLineChart
          title = {'Page Views'}
          data = {visits}
          dataKey = "quantity"
          isYAxis = {false}
          width = {200}
          height = {100}
        />
        <CustomLineChart
          title = {'Average Visit Durations'}
          data = {visits}
          dataKey = "quantity"
          isYAxis = {false}
          width = {200}
          height = {100}
        />
        <CustomLineChart
          title = {'Bounce Rate '}
          data = {visits}
          dataKey = "quantity"
          isYAxis = {false}
          width = {200}
          height = {100}
        />
        <CustomLineChart
          title = {'Pages Per Visit'}
          data = {visits}
          dataKey = "quantity"
          isYAxis = {false}
          width = {200}
          height = {100}
        />
      </Grid>
    </Grid>
  );
}
