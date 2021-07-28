import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import CustomLineChart from '../Components/CustomLineChart';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/styles';
import DatePickers from '../Components/DatePickers';
import { DashboardData } from './dashboarddata';
import { DashboardCard } from './dashboardcard';

const useStyles = makeStyles({
  whiteText: {
    color: 'white',
  },
  dateComponent: {
    color: 'white',
  },
});

export default function Home() {
  const [visits, setVisits] = useState([
    { date: '11/28', quantity: 10 },
    { date: '11/29', quantity: 9 },
    { date: '11/30', quantity: 6 },
    { date: '12/1', quantity: 4 },
    { date: '12/2', quantity: 15 },
  ]);

  const [startDate, setStartDate] = useState('2020-05-24');
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center" className={classes.whiteText}>
      <Grid item container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3">Dashboard</Typography>
        </Grid>
        <Grid item>
          <Select className={classes.whiteText} value={'last seven days'}>
            <MenuItem value={'last seven days'}>Last seven days</MenuItem>
            <MenuItem value={'last 2 weeks'}>Last 2 weeks</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Grid item container direction="row" justify="center" alignItems="center">
        <Grid item>
          <h5>From </h5>
        </Grid>
        <Grid item>
          <DatePickers></DatePickers>
        </Grid>
        <Grid item>
          <h5>To </h5>
        </Grid>
        <Grid item>
          <DatePickers></DatePickers>
        </Grid>
      </Grid>
      <Grid item>
        <CustomLineChart title={'Visits'} data={visits} xLabel="date" dataKey="quantity" />
      </Grid>
      <Grid item container direction="row" justify="flex-start" alignItems="center">
        {DashboardData.map((object, dashboard) => (
          // <Grid item>
          <DashboardCard {...object} />
          // </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
