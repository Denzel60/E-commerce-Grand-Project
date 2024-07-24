import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createOrder = async (req, res) => {
  const user = req.user;
  const userId = user.id;
  const userEmail = user.email;
  const userPhoneNumber = user.phoneNumber;
  const { image, name, price, description, sellerId } = req.body;
  try {
    const createOrder = await prisma.orders.create({
      data: {
        userId: userId,
        image: image,
        name: name,
        price: price,
        description: description,
        userEmail: userEmail,
        userPhoneNumber: userPhoneNumber,
        sellerId: sellerId,
      },
    });
    res.status(200).json({ success: true, data: createOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getBuyerOrder = async (req, res) => {
  try {
    const user = req.user;
    const userId = user.id;
    const getBuyerOrder = await prisma.orders.findMany({
      where: { userId: userId },
      select: {
        id: true,
        image: true,
        description: true,
        price: true,
        name: true,
        sellerId: true,
        userPhoneNumber: true,
      },
    });
    res.status(200).json({ success: true, message: getBuyerOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSellerOrder = async (req, res) => {
  try {
    const user = req.user;
    const sellerId = user.id;
    const getSellerOrder = await prisma.orders.findMany({
      where: { sellerId: sellerId },
      select: {
        id: true,
        image: true,
        description: true,
        price: true,
        name: true,
        userId: true,
        userPhoneNumber: true,
      },
    });
    res.status(200).json({ success: true, message: getSellerOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteOrder = await prisma.orders.delete({
      where: { id: id },
    });
    res.status(200).json({ success: true, message: deleteOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
