 import axios from "axios";

 const getCommandData = async () => {
  const data = await axios
    .get('http://localhost:8000/commandcallcount', {
      data: {
        "command": ["s!mute", "s!help"],
        "start_date": "2021-04-01",
        "end_date": "2021-07-01"
      }
    })
      .then(response => {
      const obj = JSON.stringify(response.data);
      return obj;
    });
    return data;
};

export default getCommandData;
