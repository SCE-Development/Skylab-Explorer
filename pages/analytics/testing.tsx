import React, { useState } from 'react';
import { Divider, Box, CardContent, Card, Grid, Typography, Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CustomKeyMetric from "../../Components/CustomCardMetric";
import CustomLineChart from "../../Components/CustomLineChart";
import DropdownFrequency from "../../Components/DropdownFrequency";
import axios, { AxiosRequestConfig } from "axios";
import useDarkMode from 'use-dark-mode';
import pageVisitsQuery from "../../lib/api/dataQuery";

const getData = async (baseUrl = "") => {
  const query: AxiosRequestConfig = {
    method: 'post',
    url: baseUrl + '/api/pageVisitsQuery',
    headers: { 'Content-Type': 'application/json' },
  };
  console.log("Testing");
  const response = await axios(query);
  console.log("Testing 2");
  return response.data.data;
};

const PurpleTypography = withStyles({
  root: {
    color: "#A5B7F6"
  }
})(Typography);

export default function CoreV4Page({ fetchedCommandData }) {
const [commandData, setCommandData] = useState(fetchedCommandData);
console.log("Printing sample command data:");
try {
  console.log(commandData);
} catch (error) {
  console.log("Data was not correctly fetched");
}
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

export const getServerSideProps = async () => {
  const data = await pageVisitsQuery();
  return {
    props: {
      fetchedCommandData: data
    },
  };
};
