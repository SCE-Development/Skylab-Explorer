import axios from 'axios';
import { ApiResponse } from './/apiResponses.js';

export async function getPrintPlots(start_date, end_date, baseUrl = 'http://localhost:8000') {
  let status = new ApiResponse();

  await axios
    .post(baseUrl + '/printingAnalytics', { data: { start_date, end_date } })
    .then((res) => {
      status = res.data.Data;
    })
    .catch(() => {
      status.error = true;
    });

  return status;
}

export async function getLoginPlots(start_date, end_date, baseUrl = 'http://localhost:8000') {
  let status = new ApiResponse();

  await axios
    .post(baseUrl + '/loginTraffic', { data: { start_date, end_date } })
    .then((res) => {
      status = res.data.Data;
    })
    .catch(() => {
      status.error = true;
    });

  return status;
}
