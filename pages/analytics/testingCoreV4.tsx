import React, { useState } from 'react';
import { Divider, Box, CardContent, Card, Grid, Typography, Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CustomKeyMetric from "../../Components/CustomCardMetric";
import CustomLineChart from "../../Components/CustomLineChart";
import DropdownFrequency from "../../Components/DropdownFrequency";
import axios, { AxiosRequestConfig } from "axios";
import useDarkMode from 'use-dark-mode';
import { getPageLoginData, getPrintingData, getPageVisitData } from "../../lib/api/CoreV4Query";

const OrangeTypography = withStyles({
  root: {
    color: "#F6A5A5"
  }
})(Typography);

export default function CoreV4Page({ fetchedPageLoginData, fetchedPrintingData, fetchedPageVisitData }) {
  const [pageLoginData, setPageLoginData] = useState(fetchedPageLoginData);
  const [printingData, setPrintingData] = useState(fetchedPrintingData);
  const [pageVisitData, setPageVisitData] = useState(fetchedPageVisitData);

  console.log(pageLoginData);
  console.log(printingData);
  console.log(pageVisitData);

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

export const getStaticProps = async () => {
  const pageLoginData = await getPageLoginData();
  const printingData = await getPrintingData();
  const pageVisitData = await getPageVisitData();
  return {
    props: {
      fetchedPageLoginData: pageLoginData,
      fetchedPrintingData: printingData,
      fetchedPageVisitData: pageVisitData
    },
  };
};
