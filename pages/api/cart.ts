import type { NextApiRequest, NextApiResponse } from "next";
const User = require("../../models/user");
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "PUT":
      const { productId, size, quantity, email } = req.body;

      // Check if product to be added to the cart is sent
      if (!req?.body?.productId) {
        res.status(400).json({ message: "Product ID is required" });
      }

      // Check if item is available in the database or available for purchase
      try {
        const response = await axios.get(
          `http://localhost:4000/products/${productId}`
        );
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
          };
          if (items) {
            const result = await User.updateOne(
              { email: email },
              { $addToSet: { cart: items } }
            );

            const { name, price, image, category } = response.data;
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
          .json({ message: `No item is found with ID ${productId}` });
      }

      break;

    case "GET":
      res.json({ message: "This is the add to cart server" });

      break;
  }
}
