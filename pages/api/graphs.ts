import axios from 'axios';

export const getPrintPlots = async (startDate, endDate, baseUrl = 'http://localhost:8000') => {
  const status = { data: [], error: false };

  await axios
    .post(baseUrl + '/printingAnalytics', {
      start_date: startDate,
      end_date: endDate,
    })
    .then((res) => {
      console.log({
        start_date: startDate,
        end_date: endDate,
      });
      status.data = res.data.Data;
    })
    .catch(() => {
      status.error = true;
    });

  return status;
};

export const getLoginPlots = async (startDate, endDate, baseUrl = 'http://localhost:8000') => {
  const status = { data: [], error: false };

  await axios
    .post(baseUrl + '/loginTraffic', {
      start_date: startDate,
      end_date: endDate,
    })
    .then((res) => {
      status.data = res.data.Data;
    })
    .catch(() => {
      status.error = true;
    });

  return status;
};
