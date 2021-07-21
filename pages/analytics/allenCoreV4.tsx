import React, { useState, useEffect, useCallback } from 'react';
import { Divider, Box, CardContent, Card, Grid, Typography, Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CustomKeyMetric from '../../Components/CustomCardMetric';
import CustomLineChart from '../../Components/CustomLineChart';
import useDarkMode from 'use-dark-mode';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/styles';
import DatePickers from '../../Components/DatePickers';
import { getPrintPlots, getLoginPlots } from '../api/graphs';
import APIResponse from './/apiResponses';

const OrangeTypography = withStyles({
  root: {
    color: '#F6A5A5',
  },
})(Typography);
export default function Home() {
  const [printing, setPrinting] = useState(null);
  const [printTotal, setPrintTotal] = useState(null);
  const [logins, setLogins] = useState(null);
  const [loginTotal, setLoginTotal] = useState(null);

  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));

  const startDateCallback = useCallback((date) => {
    if (date > endDate) {
      console.log('Error. Setting Start Date to 3 months back.');
      setStartDate(
        new Date(new Date().getFullYear(), new Date().getMonth() - 3, new Date().getDate()).toISOString().slice(0, 10)
      );
    } else {
      setStartDate(date);
    }
  });

  const endDateCallback = useCallback((date) => {
    if (date < startDate) {
      console.log('Error. Setting End Date to today.');
      setEndDate(new Date().toISOString().slice(0, 10));
    } else {
      setEndDate(date);
    }
  });

  useEffect(async () => {
    const response = await getPrintPlots(startDate, endDate);
    console.log(response);
    let totalPageCount = 0;
    if (!response.error) {
      setPrinting(response);

      for (let i = 0; i < response.length; i += 1) {
        totalPageCount += response[i].PagesPrinted;
      }
    }

    setPrintTotal(totalPageCount);
  }, [startDate, endDate]);

  useEffect(async () => {
    const response = await getLoginPlots(startDate, endDate);
    let totalLoginCount = 0;
    if (!response.error) {
      setLogins(response);
      for (let i = 0; i < response.length; i += 1) {
        totalLoginCount += response[i].TotalLogins;
      }
    }

    setLoginTotal(totalLoginCount);
  }, [startDate, endDate]);
  const darkMode = useDarkMode();
  return (
    <div>
      <div style={{ minHeight: '150px', width: '100%' }}>
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography variant="h1" display="inline">
              SCE Analytics
            </Typography>
            <OrangeTypography variant="h2" display="inline">
              &nbsp;Core-V4
            </OrangeTypography>
          </Box>
          <Box pt={7}>
            <Button onClick={darkMode.toggle}>Scheme</Button>
          </Box>
          <Box pt={7} pl={3}>
            <Button>Logout</Button>
          </Box>
        </Box>
        <br />
        <Divider style={{ background: '#F6A5A5' }} />
      </div>
      <Grid item container direction="row" justify="center" alignItems="center">
        <Grid item>
          <h5>From </h5>
        </Grid>
        <Grid item>
          <DatePickers dateCallback={startDateCallback} />
        </Grid>
        <Grid item>
          <h5>To </h5>
        </Grid>
        <Grid item>
          <DatePickers dateCallback={endDateCallback} />
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Typography variant="h4">Key Metrics</Typography>
      <br />
      <br />
      <br />
      <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={10}>
        <Grid item>
          <CustomKeyMetric title="Commands Made" number={34} isUp={true} />
        </Grid>
        <Grid item>
          <CustomKeyMetric title="Successful Commands" number={45} isUp={false} />
        </Grid>
        <Grid item>
          <CustomKeyMetric title="Failed Commands" isUp={false} />
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Typography variant="h4">Graphs</Typography>
      <Grid item container direction="row" justifyContent="space-evenly" alignItems="center">
        <Grid item>
          <CustomLineChart
            title={'Printing Analytics'}
            total={`${printTotal}`}
            data={printing}
            xLabel="EventDate"
            dataKey2="UsersPrinted"
            dataKey="PagesPrinted"
          />
        </Grid>
        <Grid item>
          <CustomLineChart
            title={'Login Traffic'}
            total={`${loginTotal}`}
            data={logins}
            xLabel="EventDate"
            dataKey="TotalLogins"
            dataKey2="DistinctLogins"
          />
        </Grid>
      </Grid>
    </div>
  );
}
