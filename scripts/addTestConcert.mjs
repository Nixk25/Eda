import mongoose from "mongoose";
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

const name = process.argv[2] || "test";
const time = process.argv[3] || "09:05";

const today = new Date();
const dateStr = today.toISOString().split("T")[0];
const date = new Date(`${dateStr}T00:00:00.000Z`);

await mongoose.connect(uri);
const concerts = mongoose.connection.db.collection("concerts");

await concerts.deleteMany({ name });

const result = await concerts.insertOne({
  name,
  date,
  time,
  createdAt: new Date(),
  updatedAt: new Date(),
});

console.log(`Inserted concert:`);
console.log(`  _id:  ${result.insertedId}`);
console.log(`  name: ${name}`);
console.log(`  date: ${dateStr}`);
console.log(`  time: ${time}`);

await mongoose.disconnect();
