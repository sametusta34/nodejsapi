import  express from "express";
import bodyParser from "body-parser";
import Router from "./routes/routers.mjs"; 
import myConnection from "express-myconnection"; 
import mysql from "mysql";
import dbConfig from './configs/db.config.mjs';

export function startServer() {
  const app = express();

  app.use(bodyParser.json());

  //app.use(myConnection(mysql, dbConfig , "single"));

  app.use(Router);

  return app;
}
