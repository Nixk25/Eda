import mongoose, { models, Schema } from "mongoose";
const concertSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Concert = models.Concert || mongoose.model("Concert", concertSchema);

export default Concert;
