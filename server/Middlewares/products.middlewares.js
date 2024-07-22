export const validateProductInformation = async (req, res, next) => {
  const { name, image, category, price, description } = req.body;

  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "Product name is required" });
  if (!image)
    return res
      .status(400)
      .json({ success: false, message: "Image is required" });
  if (!category)
    return res
      .status(400)
      .json({ success: false, message: "Category is required" });
  if (!price)
    return res
      .status(400)
      .json({ success: false, message: "Price is required" });
  if (!description)
    return res
      .status(400)
      .json({ success: false, message: "Description is required" });

  next();
};
