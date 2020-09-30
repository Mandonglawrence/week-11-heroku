import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

 const myConnection = async function connectToCluster(){
    await mongoose.connect(process.env.MONGODB_URI!
        /*use this in typescipt:process.env.MONGODB_URI!*/
    /*"mongodb://localhost/week9"*/,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("mongodb connected successfully")
      }
      // mongoose.connection.close();
    }
    )
  
  }
  export default myConnection;
//    connectToCluster();