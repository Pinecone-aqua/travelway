import express, { Request, Response } from "express";
import User from "../models/Users-model";

const userRouter = express.Router();

userRouter.get("/user", async (req: Request, res: Response) => {
    
    console.clear();
    console.log("User Request receive....");

    const users = await User.find({});

    return res.status(200).send(users);
});

export default userRouter;