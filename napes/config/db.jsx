// To Connect to mongodb
import mongoose from 'mongoose';

const connection = {}

async function connect() {
  // before connecting, check if we are already connected, we don't need to connnect again.
  if (connection.isConnected) {
    console.log("Already Connected");
    // then stop the connection
    return;
  }

  // this means we have connnection in the connection queue
  if (mongoose.connections.length > 0) {
    // get readystate of the first connection in mongoose and set it in the connection var isConnected field
    connection.isConnected = mongoose.connections[0].readyState;
    // then check it, if it's equal to 1 then the readystate is 1 and we are connected to the database
    if (connection.isConnected === 1) {
      console.log("use previous connection");
      return; // which means that there is no need to connect to the database because we're already connected to it
    }
    // otherwise if isConnected is not equal to 1 we need to disconnect, because we are not in the connected mode
    await mongoose.disconnect()
  }

  // Let's go for the connection code
  const db = await mongoose.connect(process.env.MONGODB_URI)
  console.log("New Connection");
  connection.isConnected = db.connections[0].readyState;

}

async function disconnect() {
  // check if isconnected is true
  if (connection.isConnected) {
    // check if we are in production mode
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
}

const db = { connect, disconnect }
export default db;