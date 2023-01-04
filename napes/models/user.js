import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }
  }, {
  timestamps: true
}
)

// time to define the user model
// check if we already created the user in the mongoose, there is no need to go for mongoose.model function, 
// but if its null for the first time we need to create the model
const Users = mongoose.models.Users || mongoose.model("paymentInfo", userSchema);
export default Users;