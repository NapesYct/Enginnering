import bcrypt from 'bcryptjs'

export const data = {
  user: [
    {
      name: "faleye Oluwafemi",
      email: "faleyefemi@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: true
    },
    {
      name: "faleye daniel",
      email: "daniel@gmail.com",
      password: bcrypt.hashSync("12345"),
      isAdmin: false
    },
  ]
}