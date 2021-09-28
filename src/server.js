const express = require("express");

const setupExpressServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("ITS ALIVE!!!")
  });

  app.get("/category/", (req, res) => {
    res.send("ITS ALIVE!!!")
  });
  app.get("/categories/", (req, res) => {
    res.send("ITS ALIVE!!!")
  });
  app.get("/question", (req, res) => {
    res.send("ITS ALIVE!!!")
  });
  app.get("/questions", (req, res) => {
    res.send("ITS ALIVE!!!")
  });


  return app;
};

module.exports = { setupExpressServer };
