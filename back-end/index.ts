import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./controller/UserRouter";


dotenv.config();
const app: Express = express();
const port: string | undefined = process.env.PORT;
app.use(cors);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use(userRouter);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
