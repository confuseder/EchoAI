import fs from "fs";
import path from "path";

const userPrompt = fs.readFileSync(path.join(__dirname, "user.md"), "utf-8");

export default userPrompt;
