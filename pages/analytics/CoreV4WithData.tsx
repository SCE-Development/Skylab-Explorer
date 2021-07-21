import React, { useState } from 'react';
import { Divider, Box, CardContent, Card, Grid, Typography, Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CustomKeyMetric from "../../Components/CustomCardMetric";
import CustomLineChart from "../../Components/CustomLineChart";
import DropdownFrequency from "../../Components/DropdownFrequency";
import axios, { AxiosRequestConfig } from "axios";
import useDarkMode from 'use-dark-mode';

export const getStaticProps = async () => {

  const baseUrl = 'http://localhost:8000';

  const dateParams = {
    "startDate": "2015-01-01",
    "endDate": "2025-01-01"
  };

  const loginData = await fetchData(baseUrl + '/loginTraffic', dateParams);
  const printingData = await fetchData(baseUrl + '/printingAnalytics', dateParams);
  const pageData = await fetchData(baseUrl + '/pageVisits', dateParams);

  return {
    props: {
      fetchedLoginData: loginData,
      fetchedPrintingData: printingData,
      fetchedPageData: pageData
    },
  };
};

async function fetchData(requestUrl, dataBody) {
  try {
    const data = await axios
    .get(requestUrl, {
      data: dataBody
    })
    .then(response => {
      return response.data;
    })
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

const OrangeTypography = withStyles({
  root: {
    color: "#F6A5A5"
  }
})(Typography);

export default function CoreV4Page( {fetchedLoginData, fetchedPrintingData, fetchedPageData} ) {
const [loginData, setLoginData] = useState(fetchedLoginData);
const [printingData, setPrintingData] = useState(fetchedPrintingData);
const [pageData, setPageData] = useState(fetchedPageData);

console.log("Printing analytics: logging first date:", printingData.["Printing Analytics"][0]["EventDate"]);
console.log("Logging users printed:", printingData.["Printing Analytics"][0]["UsersPrinted"]);
console.log("Logging pages printed:", printingData.["Printing Analytics"][0]["PagesPrinted"]);

const darkMode = useDarkMode();
return (
      <div>
      <div style={{ minHeight: "150px", width: '100%' }}>
        <Box display="flex">
          <Box flexGrow={1}>
            <Typography variant="h1" display="inline">SCE Analytics</Typography>
            <OrangeTypography variant="h2" display="inline">&nbsp;Core-V4</OrangeTypography>
          </Box>
          <Box pt={7}>
          <Button onClick={darkMode.toggle}>Scheme</Button>
          </Box>
          <Box pt={7} pl={3}>
            <Button>Logout</Button>
          </Box>
        </Box>
        < br/>
        < Divider style={{ background: "#F6A5A5" }}/>
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
