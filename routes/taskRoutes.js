const mongoose = require("mongoose");

const Task = mongoose.model("task");

module.exports = app => {
  app.get("/api/tasks", (req, res) => {
    Task.find({}).then(data => {
      let results = [];
      data.forEach(r => {
        if (r.myStatus !== "reject") {
          results.push(r);
        }
      });
      res.status(200).send(results);
    });
  });
  app.get("/api/tasks", (req, res) => {
    const { id, myStatus } = req.body;
    const task = { id, myStatus };
    Task.updateOne({ id }, task, { upsert: true }).then(data => {
      res.status(200).send(data);
    });
  });
};
