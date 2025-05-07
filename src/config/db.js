import { connect } from "mongoose";

export const mongoDB = () => {
  try {
    connect(process.env.MONGO_URI);
    console.log(`Mongo connected`);
  } catch (error) {
    console.error(`Error in connecting mongo`);
  }
};

// export