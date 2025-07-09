// import path from "path";
// import { promises as fs } from "fs";

// export default async function handler(req, res) {
//   const filePath = path.join(process.cwd(), "data/users.json");
//   const fileData = await fs.readFile(filePath, "utf-8");
//   const users = JSON.parse(fileData);

//   res.status(200).json({ success: true, data: users });
// }

//-----------------------------------------------------------------------------------------------------

import fs from "fs";
import path from "path";

const getUserDataPath = () => path.join(process.cwd(), "data", "users.json");

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  try {
    const filePath = getUserDataPath();
    if (!fs.existsSync(filePath)) {
      return res
        .status(404)
        .json({ success: false, error: "User data file not found" });
    }

    const fileData = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(fileData);
    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("User API error:", error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
}
