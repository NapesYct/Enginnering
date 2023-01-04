import db from "../../config/db";
import UserPayment from "../../models/payments";


async function updateUser(req, res) {
  const updatedU = {
    fullName: "John Doe",
    department: "Yabatech"
  }
  try {
    console.log("Connecting To Mongodb");
    await db.connect()
    console.log("Connected To Mongodb");

    console.log("CREATING USER...");
    const user = await UserPayment.find({ id: 'gbvRvcwqcaaO7dqNFDvd1qQEEEK2' })
    console.log(user);
    user.department = updatedU.department;
    await user.save()

    res.status(200).json({ user })
    console.log('USER UPDATED SUCCESSFULLY');
  } catch (error) {
    res.status(500).json({ message: error.message })
  }


}

export default updateUser