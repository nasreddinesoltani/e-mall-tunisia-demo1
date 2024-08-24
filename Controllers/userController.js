import asyncHandler from "express-async-handler";
import User from "../Models/userModel.js";
import generateToken from "../Utils/generateToken.js";
// @desc Register new User
// route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, age, photo, password, wishList } =
    req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    age,
    photo,
    password,
    wishList,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      photo: user.photo,
      wishList: user.wishList,
    });
  } else {
    throw new Error("Invalid user Data");
  }
});

// @desc Auth new User
// route POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email })
    .select("+password")
    .populate("wishList");
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      photo: user.photo,
      wishList: user.wishList,
    });
  } else {
    res.status(401).json({ message: "Invalid Email or password" });
  }
});

// @desc Auth new User
// route POST /api/users/auth
// @access Public

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("JWT", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "User Logged Out" });
});

const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find().populate("wishList");
    res.status(200).json(users);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

// const getUser = asyncHandler(async (req, res) => {
//   try {
//     const user = await User.findById(id)
//       .select("+password")
//       .populate("wishList");
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(401);
//     throw new Error(error);
//   }
// });

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password, age, photo, wishList } =
    req.body;
  try {
    const user = await User.findById(id).select("+password");

    if (user) {
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      user.email = email || user.email;
      user.password = password || user.password;
      user.age = age || user.age;
      user.photo = photo || user.photo;
      user.wishList = wishList || user.wishList;

      const updatedUser = await user.save();
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

export { registerUser, authUser, logoutUser, getUsers, updateUser };
