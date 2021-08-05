import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import CustomLineChart from '../Components/CustomLineChart';
import CustomPieChart from '../Components/CustomPieChart';
import CustomAreaChart from '../Components/CustomAreaChart';
import CustomScatterChart from '../Components/CustomScatterChart';
import SampleScatterChart from '../Components/SampleScatterChart';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/styles';
import DatePickers from '../Components/DatePickers';
import LeftDrawer from '../Components/LeftDrawer';

const useStyles = makeStyles({
  whiteText: {
    color: 'white',
  },
  dateComponent: {
    color: 'white',
  },
});

export default function Tester() {
  const [visits, setVisits] = useState([
    { date: '11/28', quantity: 10 },
    { date: '11/29', quantity: 9 },
    { date: '11/30', quantity: 6 },
    { date: '12/1', quantity: 4 },
    { date: '12/2', quantity: 30 },
  ]);

  const [startDate, setStartDate] = useState('2020-05-24');
  const classes = useStyles();

  return (
    // Building dashboard
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <LeftDrawer />
      </Grid>
      <Grid item xs={10}>
        <Grid item container direction="row" justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3">Testing Graphs</Typography>
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
        <Grid>
          <CustomPieChart title={'Visits'} data={visits} dataKey="quantity" />
          <CustomAreaChart title={'Visits'} data={visits} dataKey="quantity" />
        </Grid>
        <Grid item container direction="row" justify="flex-start" alignItems="center">
          <CustomLineChart
            title={'Visits'}
            total="3000"
            data={visits}
            dataKey="quantity"
            isYAxis={false}
            width={200}
            height={100}
          />
          <CustomLineChart
            title={'Unique visitors'}
            total="3000"
            data={visits}
            dataKey="quantity"
            isYAxis={false}
            width={200}
            height={100}
          />
          <CustomLineChart
            title={'Page Views'}
            total="3000"
            data={visits}
            dataKey="quantity"
            isYAxis={false}
            width={200}
            height={100}
          />
          <CustomLineChart
            title={'Average Visit Durations'}
            total="3000"
            data={visits}
            dataKey="quantity"
            isYAxis={false}
            width={200}
            height={100}
          />
          <CustomLineChart
            title={'Bounce Rate '}
            total="3000"
            data={visits}
            dataKey="quantity"
            isYAxis={false}
            width={200}
            height={100}
          />
          <CustomLineChart
            title={'Pages Per Visit'}
            total="3000"
            data={visits}
            dataKey="quantity"
            isYAxis={false}
            width={200}
            height={100}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
