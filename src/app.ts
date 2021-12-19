import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";
import { setupRoute } from "./config/route";

const app = express();
app.use(cors());
app.use(express.json());
setupRoute(app);


export async function init () {
  await connectDatabase();
}

export default app;
