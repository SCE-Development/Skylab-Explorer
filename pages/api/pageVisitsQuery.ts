import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import {} from "../../lib/api/CoreV4Query";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await pageVisitsQuery();
    return res.status(200).send({ success: true, data });
  } catch (error) {
    const data = {};
      return data;
  }
};
