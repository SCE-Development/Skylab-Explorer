import { useState, useEffect, useCallback } from 'react';
import { Divider, Box, CardContent, Card, Grid, Typography, Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CustomKeyMetric from "../../Components/CustomCardMetric";
import CustomLineChart from "../../Components/CustomLineChart";
import CustomBarChart from "../../Components/CustomBarChart";
import DropdownFrequency from "../../Components/DropdownFrequency";
import axios, { AxiosRequestConfig } from "axios";
import useDarkMode from 'use-dark-mode';
import discordQuery from "../../lib/api/DiscordQuery";
import DatePickers from '../../Components/DatePickers';
import getInitialDates from "../../utils/DateUtils";

// const getData = async (baseUrl = "") => {
//   const query: AxiosRequestConfig = {
//     method: 'POST',
//     url: baseUrl + '/api/commandCallQuery',
//      body: JSON.stringify({ hungry: true }),
//     headers: {
//               // 'Accept': 'application/json',
//               'Content-Type': 'application/json',
//     }
//   };
//   const response = await axios(query);
//   return response.data.data;
// };

// for some reason fetch sends body data but axios does not
const getDataWithFetch = async (startDate, endDate) => {
  const result = await fetch('/api/commandCallQuery', {
  method: 'POST',
  body: JSON.stringify(
    {
      'startDate': startDate,
      'endDate': endDate
    }),
  headers: {
    'Content-Type': 'application/json',
  },
  }).then((response) => response.json());
  return JSON.parse(result.data);
};

const PurpleTypography = withStyles({
  root: {
    color: "#A5B7F6"
  }
})(Typography);

export default function DiscordPage({ fetchedCommandData }) {

  const [commandData, setCommandData] = useState(fetchedCommandData);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect( async () => {
    const fetchedCommands = await getDataWithFetch(startDate, endDate);
    console.log(fetchedCommands);
    setCommandData(fetchedCommands);
  }, [startDate]);


  useEffect( async () => {
    const fetchedCommands = await getDataWithFetch(startDate, endDate);
    console.log(fetchedCommands);
    setCommandData(fetchedCommands);
  }, [startDate]);

  useEffect( async () => {
    const fetchedCommands = await getDataWithFetch(dates["startDate"], dates["endDate"]);
    console.log(fetchedCommands);
    setPrintingAnalyticsData(fetchedCommands);
  }, [dates]);

  const startDateCallback = useCallback((date) => {
    setStartDate(date);
  });

  const endDateCallback = useCallback((date) => {
     setEndDate(date);
  });

  const darkMode = useDarkMode();
  return (
        <div>
          <div style={{ minHeight: "150px", width: '100%' }}>
            <Box display="flex">
              <Box flexGrow={1}>
                <Typography variant="h1" display="inline">SCE Analytics</Typography>
                <PurpleTypography variant="h2" display="inline">&nbsp;Discord</PurpleTypography>
              </Box>
              <Box pt={7}>
              <Button onClick={darkMode.toggle}>Scheme</Button>
              </Box>
              <Box pt={7} pl={3}>
                <Button>Logout</Button>
              </Box>
            </Box>
            < br/>
            < Divider style={{ background: "#A5B7F6" }}/>
          </div>
          < br/>
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
          < br/>
          <Typography variant="h4">Key Metrics</Typography>
          < br/>
          < br/>
          < br/>
          <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={10}>
            <Grid item>
              <CustomKeyMetric title="Mute Commands" number={commandData['s!mute']} isUp={true} />
            </Grid>
            <Grid item>
              <CustomKeyMetric title="Help Commands" number={commandData['s!help']} isUp={false} />
            </Grid>
            <Grid item>
              <CustomKeyMetric title="Failed Commands" isUp={false} />
            </Grid>
          </Grid>
          < br/>
          < br/>
          < br/>
          <Typography variant="h4">Graphs</Typography>
          <CustomLineChart
            title={'Visits'}
            data={[
                    { command: 's!mute', quantity: commandData["s!mute"] },
                    { command: 's!help', quantity: commandData["s!help"] },
                  ]}
            xLabel="command"
            dataKey="quantity"
          />
          <CustomBarChart
            title={'Visits'}
            data={[
                    { command: 's!mute', quantity: commandData["s!mute"] },
                    { command: 's!help', quantity: commandData["s!help"] },
                  ]}
            xLabel="command"
            dataKey="quantity"
          />
        </div>
  );
}

export const getStaticProps = async () => {
  let commandData = await discordQuery(startDate, endDate);
  commandData = JSON.parse(commandData);
  return {
    props: {
      fetchedCommandData: commandData
    },
  };
};
