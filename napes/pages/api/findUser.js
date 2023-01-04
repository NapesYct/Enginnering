import db from "../../config/db";
import UserPayment from "../../models/payments";


export default async function findOneUser(req, res) {
  try {
    await db.connect();
    const id = req.query.id;

    const user = await UserPayment.findOne({ id });
    res.json(user)
  } catch (error) {
    console.log(error.message);
  }
}