import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { readFileSync, existsSync } from "fs";

for (const file of [".env.local", ".env"]) {
  if (!existsSync(file)) continue;
  const content = readFileSync(file, "utf8");
  for (const line of content.split("\n")) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    const value = rawValue.replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI not set");
  process.exit(1);
}

const email = process.argv[2] || "test@tnr.cz";
const password = process.argv[3] || "test1234";

await mongoose.connect(uri);
const users = mongoose.connection.db.collection("users");

const existing = await users.findOne({ email });
const hash = await bcrypt.hash(password, 10);

if (existing) {
  await users.updateOne({ email }, { $set: { password: hash, updatedAt: new Date() } });
  console.log(`Updated password for existing user: ${email}`);
} else {
  await users.insertOne({
    email,
    password: hash,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log(`Created user: ${email}`);
}

console.log(`Login:    ${email}`);
console.log(`Password: ${password}`);

await mongoose.disconnect();
