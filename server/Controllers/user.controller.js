import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const createUser = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ success: true, message: createUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginUser = await prisma.user.findFirst({ where: { email } });

    if (loginUser) {
      const isPassWordValid = bcrypt.compareSync(password, loginUser.password);

      if (isPassWordValid) {
        const payload = {
          id: loginUser.id,
          firstName: loginUser.firstName,
          lastName: loginUser.lastName,
          email: loginUser.email,
          role: loginUser.role,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        res.cookie("E_commerce_token", token);
        res.status(200).json({ success: true, data: loginUser });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Wrong User Credentials" });
      }
    } else {
      res
        .status(400)
        .json({ success: false, message: "Wrong User Credentials" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      role,
      additionalPhoneNumber,
      address,
      region,
      city,
    } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const updateUser = await prisma.user.update({
      where: { id: id },
      data: {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        password: hashedPassword,
        role: role,
        additionalPhoneNumber: additionalPhoneNumber,
        address: address,
        region: region,
        city: city,
      },
    });
    res.status(200).json({ success: true, message: updateUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSellers = async (req, res) => {
  try {
    const getSellers = await prisma.user.findMany({
      where: { role: "seller" },
      select: {
        firstName: true,
        lastName: true,
        phoneNumber: true,
        email: true,
        role: true,
      },
    });
    res.status(201).json({ success: true, message: getSellers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};