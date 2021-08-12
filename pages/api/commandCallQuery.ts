import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import commandCallQuery from "../../lib/api/DiscordQuery";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await commandCallQuery(req.body.startDate, req.body.endDate);
    return res.status(200).send({ success: true, data });
  } catch (error) {
    const data = {};
      return data;
  }
};
