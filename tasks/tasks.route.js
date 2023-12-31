const express = require("express");
const middleware = require("./middleware.tasks");
const controller = require("./controller.tasks");
const auth = require("../authentication/auth");
const cookieParser = require("cookie-parser");

const taskRouter = express.Router();

taskRouter.use(cookieParser());

taskRouter.post("/create", async (req, res) => {
  const response = await controller.createTask({
    task_name: req.body.task_name,
    state: "pending",
    user_id: res.locals.user._id,
  });
  if (response.code === 200) {
    res.redirect("/dashboard");
  } else {
    res.redirect("/invalid_info");
  }
});

taskRouter.post("/update/:id", controller.updateState);
taskRouter.post("/:id", controller.deleteTask);

module.exports = taskRouter;
