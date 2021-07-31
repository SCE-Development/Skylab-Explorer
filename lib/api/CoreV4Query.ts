 import axios from "axios";
 import getInitialDates from "../../utils/DateUtils";

 const [startDate, endDate] = getInitialDates();

 export const getPageLoginData = async () => {
  const data = await axios
    .get('http://localhost:8000/loginTraffic', {
      data: {
       "start_date": startDate,
       "end_date": endDate,
      }
    })
      .then(response => {
      const obj = JSON.stringify(response.data);
      return obj;
    });
    return data;
};

export const getPrintingData = async () => {
  const data = await axios
    .get('http://localhost:8000/printingAnalytics', {
      data: {
       "start_date": startDate,
       "end_date": endDate,
      }
    })
      .then(response => {
      const obj = JSON.stringify(response.data);
      return obj;
    });
    return data;
};

export const getPageVisitData = async () => {
  const data = await axios
    .get('http://localhost:8000/pageVisits', {
      data: {
       "pages": ["/dashboard", "/events"],
        "start_date": startDate,
        "end_date": endDate
    }
    })
      .then(response => {
      const obj = JSON.stringify(response.data);
      return obj;
    });
    return data;
};

