import axios from 'axios';

export async function getPrintPlots(start_date, end_date, baseUrl = 'http://localhost:8000') {
  const status = { data: [], error: false };

  await axios
    .post(baseUrl + '/printingAnalytics', { data: { start_date, end_date } })
    .then((res) => {
      status.data = res.data.Data;
    })
    .catch(() => {
      status.error = true;
    });

  return status;
}

export async function getLoginPlots(start_date, end_date, baseUrl = 'http://localhost:8000') {
  const status = { data: [], error: false };

  await axios
    .post(baseUrl + '/loginTraffic', { data: { start_date, end_date } })
    .then((res) => {
      status.data = res.data.Data;
    })
    .catch(() => {
      status.error = true;
    });

  return status;
}
