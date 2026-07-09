import dns from "node:dns";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    if (!url) {
      throw new Error("MONGO_URI is not defined. Add it to your .env file.");
    }
    const dnsServers = process.env.MONGODB_DNS_SERVERS;
    if (dnsServers) {
      dns.setServers(dnsServers.split(",").map((server) => server.trim()));
    }

    const { connection } = await mongoose.connect(url);
    const url2 = `${connection.host}:${connection.port}`;
    console.log(`MongoDB connected: ${connection.host}`);
    console.log(`Conectado a MongoDB en: ${url2}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
