import fs from "fs";
import path from "path";

// Util: Get path to products.json
const getDatabasePath = () => path.join(process.cwd(), "data", "products.json");

// Util: Read and parse product data
const readData = () => {
  const filePath = getDatabasePath();
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]");
  }
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
};

// Util: Write updated product data
const writeData = (data) => {
  const filePath = getDatabasePath();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export default function handler(req, res) {
  try {
    const method = req.method;

    if (method === "GET") {
      const products = readData();
      return res.status(200).json({ success: true, data: products });
    }

    if (method === "POST") {
      const { title, price, description, image } = req.body;

      if (!title || !price || !description || !image) {
        return res
          .status(400)
          .json({ success: false, error: "Missing required fields" });
      }

      const products = readData();

      const newProduct = {
        id: Date.now().toString(), // Internal unique ID generation
        title,
        price,
        description,
        image
      };

      products.push(newProduct);
      writeData(products);

      return res
        .status(201)
        .json({ success: true, message: "Product added", data: newProduct });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res
      .status(405)
      .json({ success: false, error: `Method ${method} Not Allowed` });
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
}
