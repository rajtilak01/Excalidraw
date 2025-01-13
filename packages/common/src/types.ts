import { z} from "zod";

export const createUserSchema = z.object({
    username: z.string(),
    password: z.string(),
    name: z.string(),
});

export const SignInUserSchema = z.object({
    username: z.string(),
    password: z.string(),
});

export const createRoomSchema = z.object({
    name: z.string(),
});

// const { z } = require("zod");

// const createUserSchema = z.object({
//     username: z.string(),
//     password: z.string(),
//     name: z.string(),
// });

// const SignInUserSchema = z.object({
//     username: z.string(),
//     password: z.string(),
// });

// const createRoomSchema = z.object({
//     name: z.string(),
// });

// module.exports = {
//     createUserSchema,
//     SignInUserSchema,
//     createRoomSchema,
// };
