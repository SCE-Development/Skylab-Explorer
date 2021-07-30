import React, { useState } from 'react';
import { Divider, Box, CardContent, Card, Grid, Typography, Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
import CustomKeyMetric from '../../Components/CustomCardMetric';
import CustomLineChart from '../../Components/CustomLineChart';
import DropdownFrequency from '../../Components/DropdownFrequency';
import axios, { AxiosRequestConfig } from 'axios';
import useDarkMode from 'use-dark-mode';
import discordQuery from '../../lib/api/DiscordQuery';

const getData = async (baseUrl = '') => {
  const query: AxiosRequestConfig = {
    method: 'post',
    url: baseUrl + '/api/pageVisitsQuery',
    headers: { 'Content-Type': 'application/json' },
  };
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
};

const PurpleTypography = withStyles({
  root: {
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
    color: "#A5B7F6"
  }
})(Typography);

export default function DiscordPage({ fetchedCommandData }) {
<<<<<<< HEAD
const [commandData, setCommandData] = useState(fetchedCommandData);
<<<<<<< HEAD:pages/analytics/discordWithData.tsx
=======
=======
  const [commandData, setCommandData] = useState(fetchedCommandData);
>>>>>>> rebase and formatting

  console.log(commandData);

<<<<<<< HEAD
>>>>>>> fix bugs:pages/analytics/testingDiscord.tsx
const darkMode = useDarkMode();

return (
      <div>
        <div style={{ minHeight: "150px", width: '100%' }}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography variant="h1" display="inline">SCE Analytics</Typography>
              <PurpleTypography variant="h2" display="inline">&nbsp;Discord</PurpleTypography>
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
<<<<<<< HEAD:pages/analytics/discordWithData.tsx
=======

export const getStaticProps = async () => {
  const commandData = await discordQuery();
  return {
    props: {
      fetchedCommandData: commandData
    },
  };
};
>>>>>>> fix bugs:pages/analytics/testingDiscord.tsx
>>>>>>> fix bugs
