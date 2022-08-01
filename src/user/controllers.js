const User = require("./model");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    console.log(newUser);
    res.send({ msg: "This came from createUser" });
  } catch (error) {
    console.log(error);
  }
};

exports.findUser = async (req, res) => {
  try {
    const findUser = await User.find(req.body);
    console.log(findUser);
    res.send({ msg: "This came from findUser" });
  } catch (error) {
    console.log(error);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      { username: req.body.username },
      { password: req.body.password }
    );
    console.log(updateUser);
    res.send({ msg: "This came from updateUser" });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({ username: req.body.username });
    console.log(deleteUser);
    res.send({ msg: "This came from deleteUser" });
  } catch (error) {
    console.log(error);
  }
};
