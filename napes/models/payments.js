import mongoose from "mongoose";


const userPaymentSchema = new mongoose.Schema({
  id: { type: String, unique: true, default: "12345" },
  fullName: { type: String },
  email: { type: String },
  phone_no: { type: String, default: "0" },
  matric_no: { type: String },
  department: { type: String },
  amount: { type: Number },
  paymentStatus: { type: Boolean, default: false }
}, {
  timestamps: true
}
)

const UserPayment = mongoose.models.paymentInfo || mongoose.model("paymentInfo", userPaymentSchema)

export default UserPayment