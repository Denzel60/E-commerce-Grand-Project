import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createOrder = async (req, res) => {
  const user = req.user;
  const userId = user.id;
  const { image, name, price, description, category, sellerId } = req.body;
  try {
    const createOrder = await prisma.order.create({
      data: {
        userId: userId,
        image: image,
        name: name,
        price: price,
        description: description,
        category: category,
        sellerId: sellerId,
      },
    });
    res.status(200).json({ success: true, data: createOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
