const fs = require("fs");
const path = require("path");
const folder = path.join(process.cwd(), "build", "server", "src", "app", "api");
try {
  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, "placeholder.txt"), "placeholder");
  console.log("ensured build/server/src/app/api exists");
} catch (e) {
  console.error("could not ensure folder:", e);
}
