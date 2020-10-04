import { NextApiRequest, NextApiResponse } from "next";

export default function interest(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  const { id } = query;

  switch (method) {
    case "POST": {
      //take the id and increase the interesting people numbers
      res.json({ msg: "COme here and there ?" + id });
      break;
    }
  }
}
