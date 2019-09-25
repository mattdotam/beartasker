const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: String,
  budget: Number,
  id: String,
  url: String,
  due: Number,
  status: String,
  bids: Number,
});

mongoose.model("task", taskSchema);
