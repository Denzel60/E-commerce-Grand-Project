import jwt from "jsonwebtoken";
const verifySellerToken = (req, res, next) => {
  const token = req.cookies.E_commerce_token;

  if (!token)
    return res.status(401).json({ success: false, message: "Token not found" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    req.user = decoded;

    if (decoded.role !== "seller")
      return res
        .status(401)
        .json({ success: false, message: "You are not authorized" });

    next();
  });
};

export default verifySellerToken;
