import type { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import { getPageVisitData } from "../../lib/api/CoreV4Query";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await getPageVisitData();
    return res.status(200).send({ success: true, data });
  } catch (error) {
    const data = {};
      return data;
  }
};
