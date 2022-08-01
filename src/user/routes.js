const { Router } = require("express");
const userRouter = Router();
const {
  createUser,
  findUser,
  updateUser,
  deleteUser,
} = require("./controllers");

userRouter.post("/user", createUser);

userRouter.get("/user", findUser);

userRouter.patch("/user", updateUser);

userRouter.delete("/user", deleteUser);

module.exports = userRouter;
