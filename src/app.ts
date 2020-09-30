import express from "express";
import { graphqlHTTP } from "express-graphql";
import morgan from "morgan";
import grapqlModel from "./models/graphqlModel"
import myConnection  from "./bin/www/connection";

myConnection();
export const app = express();
app.use(morgan("dev"));
app.use("/graphql",
  graphqlHTTP(
  {
  schema: grapqlModel,
  graphiql: true
    }
  ));





export default app;
