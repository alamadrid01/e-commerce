import type { NextApiRequest, NextApiResponse } from "next";
const User = require("../../../models/user");
import axios from "axios";
const multer = require("multer")

const upload = multer();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  const { productId, size, quantity, email, image } = req.body;
  console.log(req.body)
  switch (method) {
    case "PUT":
      // Check if product to be added to the cart is sent
      if (!req?.body?.productId) {
        res.status(400).json({ message: "Product ID is required" });
      }

      // Check if item is available in the database or available for purchase
      try {
        const response = await axios.get(
          `http://localhost:4000/products/${productId}`
        );
        const { name, price, image, category } = response.data;
        if (response.data.length === 0 || response.data.quantity === 0) {
          res
            .status(204)
            .json({ message: "No product was found or product has finished" });
        } else {
          // Check the user
          const user = await User.findOne({ email: email }).exec();
          if (!user)
            return res
              .status(204)
              .json({ message: `No User matches this email ${email}` });
          // Add item to Cart
          const items = {
            quantity,
            itemId: productId,
            size,
            image
          };
          if (items) {
            const result = await User.updateOne(
              { email: email },
              { $addToSet: { cart: items } }
            );

            res.json({
              message: "Item added to cart successfully",
              name,
              price,
              image,
              category,
              quantity,
              result,
            });
          }
        }
      } catch (err) {
        res
          .status(400)
          .json({ message: `No item is or are found with ID ${productId}` });
      }

      break;

    case "POST":
      const result = await User.findOne({ email: email }).exec();
      res.json(result.cart);

      break;

    case "GET":
      res.json({ message: "You are trying to access the cart API" });

      break;
  }
}
