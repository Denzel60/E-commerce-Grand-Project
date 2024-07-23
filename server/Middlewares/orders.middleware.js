export const validateOrderInformation = async (req, res, next) => {
  const { image, name, price, description, sellerId } = req.body;

  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "Product name is required" });
  if (!image)
    return res
      .status(400)
      .json({ success: false, message: "Product Image is required" });
  if (!price)
    return res
      .status(400)
      .json({ success: false, message: "Product Price is required" });
  if (!sellerId)
    return res
      .status(400)
      .json({ success: false, message: "Seller Id is required" });
  if (!description)
    return res
      .status(400)
      .json({ success: false, message: "Product Description is required" });

  next();
};
