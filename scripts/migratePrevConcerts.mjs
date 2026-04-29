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

await mongoose.connect(uri);
const db = mongoose.connection.db;

const concerts = db.collection("concerts");
const prev = db.collection("prevconcerts");

const prevDocs = await prev.find({}).toArray();
console.log(`Found ${prevDocs.length} docs in prevconcerts`);

let inserted = 0;
let skipped = 0;
for (const doc of prevDocs) {
  const exists = await concerts.findOne({
    name: doc.name,
    date: doc.date,
  });
  if (exists) {
    skipped++;
    continue;
  }
  await concerts.insertOne({
    name: doc.name,
    date: doc.date,
    time: doc.time,
    createdAt: doc.createdAt || new Date(),
    updatedAt: doc.updatedAt || new Date(),
  });
  inserted++;
}

console.log(`Inserted: ${inserted}, skipped (already in concerts): ${skipped}`);

const allConcerts = await concerts.find({}).sort({ createdAt: 1 }).toArray();
const seen = new Map();
let removedDupes = 0;
for (const c of allConcerts) {
  const key = `${c.name}::${new Date(c.date).toISOString()}`;
  if (seen.has(key)) {
    await concerts.deleteOne({ _id: c._id });
    removedDupes++;
  } else {
    seen.set(key, c._id);
  }
}
console.log(`Removed ${removedDupes} duplicate concerts`);

try {
  await concerts.createIndex({ name: 1, date: 1 }, { unique: true });
  console.log("Unique index on {name, date} ensured");
} catch (err) {
  console.error("Index creation failed:", err.message);
}

await mongoose.disconnect();
console.log("Done. You can now drop the prevconcerts collection in MongoDB if desired.");
