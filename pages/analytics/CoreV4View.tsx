import React, { useState } from 'react';
import { Divider, Box, CardContent, Card, Grid, Typography, Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CustomKeyMetric from "../../Components/CustomCardMetric";
import CustomLineChart from "../../Components/CustomLineChart";
import DropdownFrequency from "../../Components/DropdownFrequency";
import useDarkMode from 'use-dark-mode';

const OrangeTypography = withStyles({
  root: {
    color: "#F6A5A5"
  }
})(Typography);
export default function CoreV4Page() {
const [data, setData] = useState([
  { date: '11/28', quantity: 10 },
  { date: '11/29', quantity: 9 },
  { date: '11/30', quantity: 6 },
  { date: '12/1', quantity: 4 },
  { date: '12/2', quantity: 15 },
]);
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
      <CustomLineChart
        title={'Visits'}
        total="3000"
        data={data}
        dataKey="quantity"
        isYAxis={false}
        width={400}
        height={500}
        xLabel="date"
      />
      </div>
  );
}
