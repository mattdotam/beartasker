const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: String,
  budget: Number,
  id: String,
  url: String,
  due: Number,
  bids: Number,
  value: Number,
  hrsEstimate: Number,
  hrsActual: Number,
  stage: String,
  leadStamp: Number,
  rejectStamp: Number,
  proposeStamp: Number,
  developStamp: Number,
  deliverStamp: Number,
  wonStamp: Number,
  lostStamp: Number,
});

mongoose.model("task", taskSchema);
