import { mongoose, Schema } from "../../middleware/db";

const WoCao = new Schema(
  {
    papapa: {
      type: String,
      required: true
    },
    msg: {
      type: String
    }
  },
  {
    collection: "test", //集合名
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
  }
);

export default mongoose.model("test", WoCao);
