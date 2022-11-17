// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  flutterwave_key: string,
  age: number,
  apiKey: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: 'Faleye Caleb Oluwafemi',
    age: 23,
    flutterwave_key: "FLWPUBK_TEST-4bb1c701c887dc7cc715043bcbb7f830-X",
    apiKey: "napes-website-wawfl"

  })
}
