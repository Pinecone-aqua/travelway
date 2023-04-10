import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRouter from "./controller/UserRouter";
import cors from "cors";


dotenv.config();
const app: Express = express();
const port: string | undefined = process.env.PORT;
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use(userRouter);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
