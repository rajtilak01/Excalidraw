import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { createUserSchema, SignInUserSchema, createRoomSchema } from "@repo/common/types";
import { middleware } from "./middleware";
import { prismaClient } from "@repo/db/client";
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {

    const parsedData = createUserSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    try {
        const user = await prismaClient.user.create({
            data: {
                email: parsedData.data?.username,
                password: parsedData.data.password,
                name: parsedData.data.name
            }
        })
        res.json({
            userId: user.id
        })
    } catch(e) {
        res.status(411).json({
            message: "User already exists with this username"
        })
    }
})

app.post("/signin", (req, res) => {
    

    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room", middleware, (req, res) => {
    // db call

    res.json({
        roomId: 123
    })
})
app.listen(3000, () => {    
    console.log("http-backend listening on port 3000!");
});