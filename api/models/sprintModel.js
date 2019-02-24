const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SprintSchema = new Schema({
  sessionName: {
    type: String,
    max: 200,
    required: "Kindly enter the session name"
  },
  numberOfVoters: {
    type: Number,
    min: [1, "Atleast 1 voter should be in story"],
    required: "Kindly enter a number name"
  },
  stories: [{ type: Schema.Types.ObjectId, ref: "Stories" }],
  created_date: {
    type: Date,
    default: Date.now
  }
});

const StorySchema = Schema({
  sprint: { type: Schema.Types.ObjectId, ref: "Sprints" },
  name: String,
  status: {
    type: String,
    enum: ["Not Voted", "Active", "Voted"],
    default: "Not Voted"
  },
  estimations: [{ type: Schema.Types.ObjectId, ref: "Estimations" }],
  finalEstimation: String
});

const EstimationSchema = Schema({
  value: {
    type: String,
    enum: ["1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "134", "?"],
    default: "?"
  },
  story: {
    type: Schema.Types.ObjectId,
    ref: "Stories",
    required: "story id is necesary"
  }
});

module.exports = mongoose.model("Estimations", EstimationSchema);
module.exports = mongoose.model("Stories", StorySchema);
module.exports = mongoose.model("Sprints", SprintSchema);
