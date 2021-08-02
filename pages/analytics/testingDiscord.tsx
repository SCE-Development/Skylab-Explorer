import { useState, useEffect, useCallback } from 'react';
import { Divider, Box, CardContent, Card, Grid, Typography, Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
<<<<<<< HEAD
import CustomKeyMetric from '../../Components/CustomCardMetric';
import CustomLineChart from '../../Components/CustomLineChart';
import DropdownFrequency from '../../Components/DropdownFrequency';
import axios, { AxiosRequestConfig } from 'axios';
import useDarkMode from 'use-dark-mode';
import discordQuery from '../../lib/api/DiscordQuery';

const getData = async (baseUrl = '') => {
=======
import CustomKeyMetric from "../../Components/CustomCardMetric";
import CustomLineChart from "../../Components/CustomLineChart";
import CustomBarChart from "../../Components/CustomBarChart";
import DropdownFrequency from "../../Components/DropdownFrequency";
import axios, { AxiosRequestConfig } from "axios";
import useDarkMode from 'use-dark-mode';
import discordQuery from "../../lib/api/DiscordQuery";
import DatePickers from '../../Components/DatePickers';
import getInitialDates from "../../utils/DateUtils";

<<<<<<< HEAD
const getData = async (baseUrl = "") => {
>>>>>>> fix bugs
  const query: AxiosRequestConfig = {
    method: 'post',
    url: baseUrl + '/api/pageVisitsQuery',
    headers: { 'Content-Type': 'application/json' },
  };
<<<<<<< HEAD
  console.log('Testing');
  const response = await axios(query);
  console.log('Testing 2');
  return response.data.data;
=======
import CustomKeyMetric from "../../Components/CustomCardMetric";
import CustomLineChart from "../../Components/CustomLineChart";
import DropdownFrequency from "../../Components/DropdownFrequency";
import axios, { AxiosRequestConfig } from "axios";
import useDarkMode from 'use-dark-mode';
<<<<<<< HEAD:pages/analytics/discordWithData.tsx
=======
import discordQuery from "../../lib/api/DiscordQuery";
>>>>>>> fix bugs:pages/analytics/testingDiscord.tsx

async function fetchData(requestUrl, dataBody) {
  try {
    const data = await axios
    .get(requestUrl, {
      data: dataBody
    })
    .then(response => {
      return response.data;
    });
    return data;
  } catch (error) {
    if (error.response) {
      console.log("API call failed: client response error: Code", error.response.status);
    } else if (error.request) {
      console.log("API call failed: client request error");
    } else {
      console.log("API call failed: unspecified error");
    }
    return {};
  }
}

export const getStaticProps = async () => {
  const baseUrl = 'http://localhost:8000';
  const commandDataParams = {
    "command": ["s!mute", "s!help"],
    "startDate": "2015-01-01",
    "endDate": "2025-01-01"
  };
  const commandData = await fetchData(baseUrl + '/commandCallCount', commandDataParams);
  return {
    props: {
      fetchedCommandData: commandData
    },
  };
>>>>>>> fix bugs
=======
  console.log("Testing");
  const response = await axios(query);
  console.log("Testing 2");
  return response.data.data;
>>>>>>> fix bugs
=======
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
>>>>>>> eslint errors
};

const PurpleTypography = withStyles({
  root: {
<<<<<<< HEAD
<<<<<<< HEAD
    color: '#A5B7F6',
  },
})(Typography);

export default function DiscordPage({ fetchedCommandData }) {
  const [commandData, setCommandData] = useState(fetchedCommandData);

  console.log(commandData);

  const darkMode = useDarkMode();
  return (
    <div>
      <div style={{ minHeight: '150px', width: '100%' }}>
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography variant="h1" display="inline">
              SCE Analytics
            </Typography>
            <PurpleTypography variant="h2" display="inline">
              &nbsp;Discord
            </PurpleTypography>
          </Box>
          <Box pt={7}>
            <Button onClick={darkMode.toggle}>Scheme</Button>
          </Box>
          <Box pt={7} pl={3}>
            <Button>Logout</Button>
          </Box>
        </Box>
        <br />
        <Divider style={{ background: '#A5B7F6' }} />
      </div>
      <DropdownFrequency />
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
    </div>
  );
}

const getStaticProps = async () => {
  const commandData = await discordQuery();
  return {
    props: {
      fetchedCommandData: commandData,
    },
  };
};
=======
=======
>>>>>>> fix bugs
    color: "#A5B7F6"
  }
})(Typography);

export default function DiscordPage({ fetchedCommandData }) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const [commandData, setCommandData] = useState(fetchedCommandData);
<<<<<<< HEAD:pages/analytics/discordWithData.tsx
=======
=======
  const [commandData, setCommandData] = useState(fetchedCommandData);
>>>>>>> rebase and formatting
=======

  const [commandData, setCommandData] = useState(fetchedCommandData);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect( async () => {
    const fetchedCommands = await getDataWithFetch(startDate, endDate);
    console.log(fetchedCommands);
    setCommandData(fetchedCommands);
  }, [startDate]);

>>>>>>> eslint errors

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

<<<<<<< HEAD
>>>>>>> fix bugs:pages/analytics/testingDiscord.tsx
const darkMode = useDarkMode();

=======
const [commandData, setCommandData] = useState(fetchedCommandData);

console.log(commandData);

const darkMode = useDarkMode();
>>>>>>> fix bugs
return (
      <div>
        <div style={{ minHeight: "150px", width: '100%' }}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography variant="h1" display="inline">SCE Analytics</Typography>
              <PurpleTypography variant="h2" display="inline">&nbsp;Discord</PurpleTypography>
<<<<<<< HEAD
=======
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
>>>>>>> rebase and formatting
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
<<<<<<< HEAD:pages/analytics/discordWithData.tsx
=======
=======
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
        <DropdownFrequency />
        < br/>
        < br/>
        < br/>
        <Typography variant="h4">Key Metrics</Typography>
        < br/>
        < br/>
        < br/>
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
        < br/>
        < br/>
        < br/>
        <Typography variant="h4">Graphs</Typography>
      </div>
  );
}
>>>>>>> fix bugs

export const getStaticProps = async () => {
  let commandData = await discordQuery(startDate, endDate);
  commandData = JSON.parse(commandData);
  return {
    props: {
      fetchedCommandData: commandData
    },
  };
};
<<<<<<< HEAD
>>>>>>> fix bugs:pages/analytics/testingDiscord.tsx
>>>>>>> fix bugs
=======
>>>>>>> fix bugs
