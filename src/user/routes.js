const { Router } = require("express");
const userRouter = Router();
const {
  createUser,
  login,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("./controllers");
const { hashPass, comparePass, tokenCheck } = require("../middleware");

userRouter.post("/user", hashPass, createUser);
userRouter.post("/login", comparePass, login);
userRouter.get("/user", getAllUsers);
userRouter.get("/login", tokenCheck, login);

userRouter.patch("/user", hashPass, updateUser);

userRouter.delete("/user", deleteUser);

module.exports = userRouter;
