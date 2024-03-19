import mongoose, { models, Schema } from "mongoose";
const prevConcertSchema = new Schema(
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

const PrevConcert =
  models.PrevConcert || mongoose.model("PrevConcert", prevConcertSchema);

export default PrevConcert;
