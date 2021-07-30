 import axios from "axios";
 import getInitialDates from "../../utils/DateUtils";

 const [startDate, endDate] = getInitialDates();

 const getCommandData = async () => {
  const data = await axios
    .get('http://localhost:8000/commandcallcount', {
      data: {
        "command": ["s!mute", "s!help"],
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

export default getCommandData;

