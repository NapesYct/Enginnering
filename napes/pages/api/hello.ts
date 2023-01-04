// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../config/db';
import Payment from '../../models/payments'

type Data = {
  name: string
}

type MyUser = {
  name: string,
  email: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: 'John Doe' })
  try {
    console.log("Connecting To Mongodb");
    await db.connect()
    console.log("Connected To Mongodb");

    console.log("CREATING USER...");

    const payments = await Payment.create(req.body)
    console.log("USER CREATED SUCCESSFULLY");

    res.json({ payments })

  } catch (error) {
    res.json(error)
  }
}
