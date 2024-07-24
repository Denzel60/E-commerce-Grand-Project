import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createProduct = async (req, res) => {
  try {
    const user = req.user;
    const sellerEmail = user.email;
    const sellerId = user.id;
    const { name, image, category, price, description } = req.body;

    const createProduct = await prisma.products.create({
      data: {
        Seller: sellerEmail,
        name: name,
        image: image,
        category: category,
        price: price,
        description: description,
        sellerId: sellerId,
      },
    });
    res.status(201).json({ success: true, message: createProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const getAllProducts = await prisma.products.findMany({
      select: {
        id: true,
        Seller: true,
        sellerId: true,
        name: true,
        image: true,
        category: true,
        price: true,
        description: true,
      },
    });
    res.status(200).json({ success: true, message: getAllProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllProductsWithoutId = async (req, res) => {
  try {
    const getAllProductsWithoutId = await prisma.products.findMany({
      select: {
        id: true,
        Seller: true,
        sellerId: true,
        name: true,
        image: true,
        category: true,
        price: true,
        description: true,
      },
    });
    res.status(200).json({ success: true, message: getAllProductsWithoutId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSpecificProduct = async (req, res) => {
  try {
    const user = req.user;
    const sellerId = user.id;
    const getSpecificProduct = await prisma.products.findMany({
      where: { sellerId: sellerId },
      select: {
        id: true,
        Seller: true,
        sellerId: true,
        name: true,
        image: true,
        category: true,
        price: true,
        description: true,
      },
    });
    res.status(200).json({ success: true, message: getSpecificProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteSpecificProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteSpecificProduct = await prisma.products.delete({
      where: { id: id },
      select: {
        id: true,
        Seller: true,
        sellerId: true,
        name: true,
        image: true,
        category: true,
        price: true,
        description: true,
      },
    });
    res.status(200).json({ success: true, message: deleteSpecificProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
