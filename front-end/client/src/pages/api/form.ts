import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    result: string
}

type BodyType = {
    username: string;
    password:string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const body: BodyType = req.body;

    console.log("Body: ", body);

    if(!body.username || !body.password) {
        return res.status(400).json({ result: 'First name or password not found'})
    }

    res.status(200).json({ result: `${body.username} ${body.password}` });
}