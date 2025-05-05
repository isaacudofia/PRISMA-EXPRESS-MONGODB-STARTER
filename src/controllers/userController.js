import { PrismaClient } from "@prisma/client";
import asyncHandler from "express-async-handler";

const prisma = new PrismaClient();

// Get all users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

// Get user by ID
export const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

// Create new user
export const createUser = asyncHandler(async (req, res) => {
  const { name, email, age } = req.body;

  // Check if user with email already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    res.status(400);
    throw new Error("User with this email already exists");
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      age: age ? Number(age) : null,
    },
  });

  res.status(201).json(user);
});

// Update user
export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  // Check if user exists
  const userExists = await prisma.user.findUnique({
    where: { id },
  });

  if (!userExists) {
    res.status(404);
    throw new Error("User not found");
  }

  // If email is being changed, check if it's unique
  if (email && email !== userExists.email) {
    const emailExists = await prisma.user.findUnique({
      where: { email },
    });

    if (emailExists) {
      res.status(400);
      throw new Error("Email already in use");
    }
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data: {
      name: name || userExists.name,
      email: email || userExists.email,
      age: age ? Number(age) : userExists.age,
    },
  });

  res.status(200).json(updatedUser);
});

// Delete user
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Check if user exists
  const userExists = await prisma.user.findUnique({
    where: { id },
  });

  if (!userExists) {
    res.status(404);
    throw new Error("User not found");
  }

  // Delete the user
  await prisma.user.delete({
    where: { id },
  });

  res.status(200).json({ message: "User deleted successfully" });
});
