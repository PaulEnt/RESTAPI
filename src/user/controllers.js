const jwt = require("jsonwebtoken");
const User = require("./model");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = await jwt.sign({ _id: newUser._id }, process.env.SECRET); //create token with user._id inside
    //generate token using newUser._id
    res.send({ newUser }); //send success message and token back in the response
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    const result = users.map((u) => {
      return u.username;
    });
    res.send({ allUsers: result });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
};

// exports.findUser = async (req, res) => {
//   try {
//     const findUser = await User.find(req.body);
//     console.log(findUser);
//     res.send({ msg: "This came from findUser" });
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.updateUser = async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      { username: req.body.username },
      { password: req.body.password }
    );
    console.log(updateUser);
    res.send({ msg: "Your password has been updated" });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({ username: req.body.username });
    console.log(deleteUser);
    res.send({ msg: "This user has been deleted from our records" });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const token = await jwt.sign({ _id: req.user._id }, process.env.SECRET); //create token with user._id inside
    res.send({ user: req.user.username, token });
  } catch (error) {
    console.log(error);
    res.send({ err: error });
  }
};
