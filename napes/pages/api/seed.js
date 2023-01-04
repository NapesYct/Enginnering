
import db from "../../config/db"
import UserPayment from "../../models/payments";
import { data } from "../../utils/data";


async function handler(req, res) {

  try {
    console.log("Connecting To Mongodb");
    await db.connect()
    console.log("Connected To Mongodb");

    console.log("CREATING USER...");

    const payments = await new UserPayment(req.body)

    await payments.save();
    console.log("USER CREATED SUCCESSFULLY");
    res.status(201).json({ message: "USER CREATED SUCCESSFULLY" })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }

}

export default handler;