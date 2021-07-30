import axios from 'axios';
import { ApiResponse } from './/apiResponses';

const LOCAL_URL = 'http://localhost:8000';

export async function getLoginPlots(dateParam) {
  let status = new ApiResponse();

  await axios
    .get(LOCAL_URL + '/loginTraffic')
    .then((res) => {
      console.log(res.data.Data);
      status = res.data.Data;
    })
    .catch(() => {
      status.error = true;
    });

  return status;
}
