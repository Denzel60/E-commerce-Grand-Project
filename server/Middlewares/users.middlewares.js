import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const validateInformation = async (req, res, next) => {
  const { firstName, lastName, phoneNumber, email, password } = req.body;

  if (!firstName)
    return res
      .status(400)
      .json({ success: false, message: "First name is required" });
  if (!lastName)
    return res
      .status(400)
      .json({ success: false, message: "Last name is required" });
  if (!phoneNumber)
    return res
      .status(400)
      .json({ success: false, message: "Phone Number is required" });
  if (!email)
    return res
      .status(400)
      .json({ success: false, message: "email is required" });
  if (!password)
    return res
      .status(400)
      .json({ success: false, message: "Password is required" });

  const userWithEmail = await prisma.user.findFirst({
    where: { email: email },
  });

  if (userWithEmail)
    return res
      .status(400)
      .json({ success: false, message: "Email already exists" });

  const userWithPhoneNumber = await prisma.user.findFirst({
    where: { phoneNumber: phoneNumber },
  });

  if (userWithPhoneNumber)
    return res
      .status(400)
      .json({ success: false, message: "Phone Number already exists" });
  next();
};
