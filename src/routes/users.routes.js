import { Router } from "express";

import {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/users.controllers.js"

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUsersById);
usersRouter.post("/", createUser);
usersRouter.put("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);

export default usersRouter;

