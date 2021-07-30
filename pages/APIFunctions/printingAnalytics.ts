import axios from 'axios';
import { ApiResponse } from './/apiResponses';

const LOCAL_URL = 'http://localhost:8000';

export async function getPrintPlots(dateParam) {
  let status = new ApiResponse();
  console.log('I received this date param' + dateParam);
  await axios
    .post(LOCAL_URL + '/printingAnalytics', { data: dateParam })
    .then((res) => {
      status = res.data.Data;
      console.log(status);
    })
    .catch(() => {
      status.error = true;
    });

  return status;
}
