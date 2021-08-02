import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import {} from "../../lib/api/CoreV4Query";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await pageVisitsQuery();
    return res.status(200).send({ success: true, data });
  } catch (error) {
    if (error.response) {
      console.log("API call failed: client response error: Code", error.response.status);
    } else if (error.request) {
      console.log("API call failed: client request error");
    } else {
      console.log("API call failed: unknown error");
    }
    const data = {};
      return data;
  }
};
