import Typography from '@material-ui/core/Typography';
import { useState, useEffect, useCallback } from 'react';
import CustomLineChart from '../Components/CustomLineChart';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/styles';
import DatePickers from '../Components/DatePickers';
import { DashboardData } from './dashboardData';
import { DashboardCard } from './dashboardCard';
import { getPrintPlots } from './APIFunctions/printingAnalytics';
import { getLoginPlots } from './APIFunctions/loginTraffic';

const useStyles = makeStyles({
  whiteText: {
    color: 'white',
  },
  dateComponent: {
    color: 'white',
  },
});

// const printingData: any = [
//   {
//     Name: 'Printing Analytics',
//     Date: 'Between 2021-04-01 and 2021-07-11',
//     Data: [
//       {
//         EventDate: '2021-04-01',
//         UsersPrinted: 1,
//         PagesPrinted: 9,
//       },
//       {
//         EventDate: '2021-07-11',
//         UsersPrinted: 1,
//         PagesPrinted: 6,
//       },
//     ],
//   },
// ];
const hardCodedDate = { startDate: '2021-04-20', endDate: '2021-04-21' };

// console.log(printingData);
export default function Home() {
  // console.log(getPrintPlots(hardCodedDate)
  //   .then((data) => {
  //     const printingData = data;
  //     console.log(data);
  //   })
  //   .catch((err) => console.log(err)));
  // getPrintPlots(hardCodedDate).then((data) => {
  //   const printingData = data;
  //   console.log(printingData);
  // });
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getPrintPlots(hardCodedDate);
  //     const data = await response.json();
  //     const [item] = data.results;
  //   }
  // });

  // const [printing, setPrinting] = useState([
  //   {
  //     date: printingData.Data[0].EventDate,
  //     quantity: printingData.Data[0].PagesPrinted,
  //   },
  // ]);

  const [printing, setPrinting] = useState(null);
  const [logins, setLogins] = useState(null);
  const [printTotal, setPrintTotal] = useState(null);
  const [loginTotal, setLoginTotal] = useState(null);

  const dateCallback = useCallback((date) => {
    console.log(date);
  });
  useEffect(async () => {
    const printResponse = await getPrintPlots(hardCodedDate);
    setPrinting(printResponse);
    let totalPageCount = 0;

    for (let i = 0; i < printResponse.length; i += 1) {
      totalPageCount += printResponse[i].PagesPrinted;
    }
    setPrintTotal(totalPageCount);
  }, []);

  useEffect(async () => {
    const loginResponse = await getLoginPlots(hardCodedDate);
    setLogins(loginResponse);
    let totalLoginCount = 0;

    for (let i = 0; i < loginResponse.length; i += 1) {
      totalLoginCount += loginResponse[i].TotalLogins;
    }
    setLoginTotal(totalLoginCount);
  }, []);

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
          <DatePickers dateCallback={dateCallback} />
        </Grid>
        <Grid item>
          <h5>To </h5>
        </Grid>
        <Grid item>
          <DatePickers dateCallback={dateCallback} />
        </Grid>
      </Grid>
      <Grid item>{/* <CustomLineChart title={'Visits'} data={visits} xLabel="date" dataKey="quantity" /> */}</Grid>
      <Grid item container direction="row" justify="flex-start" alignItems="center">
        {DashboardData.map((dashboard, key) => (
          // <Grid item key={key}>
          <DashboardCard {...dashboard} key={key} />
          // {/* </Grid> */}
        ))}
      </Grid>
      <Grid item container direction="row" justify="flex-start" alignItems="center">
        <CustomLineChart
          title={'Printing Analytics'}
          total={`${printTotal}`}
          data={printing}
          xLabel="EventDate"
          dataKey="PagesPrinted"
          isYAxis={true}
          isXAxis={true}
        />
      </Grid>
      <Grid item container direction="row" justify="flex-start" alignItems="center">
        <CustomLineChart
          title={'Login Traffic'}
          total={`${loginTotal}`}
          data={logins}
          xLabel="EventDate"
          dataKey="TotalLogins"
          isYAxis={true}
          isXAxis={true}
        />
      </Grid>
    </Grid>
  );
}
