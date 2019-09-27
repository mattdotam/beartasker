const mongoose = require("mongoose");
const taskpull = require("../taskpull");

const Task = mongoose.model("task");

module.exports = app => {
  app.get("/api/refresh", (req, res) => {
    taskpull();
    res.status(200).send();
  });
  app.get("/api/tasks", (req, res) => {
    Task.find({}).then(data => {
      let results = [];
      data.forEach(r => {
        let midnight = new Date().setHours(0, 0, 0, 0);
        if (r.stage === "reject") {
          if (r.rejectStamp >= Math.floor(midnight / 1000)) {
            results.push(r);
          }
        } else {
          results.push(r);
        }
      });
      res.status(200).send(results);
    });
  });
  app.put("/api/tasks", (req, res) => {
    req.body.tasks.forEach(t => {
      Task.updateOne({ id: t.id }, { ...t }, { upsert: true }).then(
        data => {
          console.log(data);
        },
      );
    });
    res.status(200).send();
  });
};
