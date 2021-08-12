 import axios from "axios";

 const getCommandData = async (startDate, endDate) => {
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

