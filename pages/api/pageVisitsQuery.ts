import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import pageVisitsQuery from "../../lib/api/dataQuery";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await pageVisitsQuery();
    return res.status(200).send({ success: true, data });
  } catch (error) {
    const data = {};
      return data;
  }
};
