import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createProduct = async (req, res) => {
  try {
    const user = req.user;
    const seller = user.email;
    const { image, category, price, description } = req.body;

    const createProduct = await prisma.products.create({
      data: {
        Seller: seller,
        image: image,
        category: category,
        price: price,
        description: description,
      },
    });
    res.status(201).json({ success: true, message: createProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
