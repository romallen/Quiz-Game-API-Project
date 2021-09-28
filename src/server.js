const express = require("express");

const setupExpressServer = () => {
  const app = express();
  app.use(express.json());

//   app.get("/", (req, res) => {
//     res.send("ITS ALIVE!!!")
//   });


    /*
    CREATE
    */
    app.post("/question/", (req, res) => {
        res.sendStatus(200);
    });


     /*
    REQUEST
    */
    app.get("/category/", (req, res) => {
        res.send("ITS ALIVE!!!")
    });
    app.get("/categories/", (req, res) => {
        res.send("ITS ALIVE!!!")
    });
    app.get("/question", (req, res) => {
        res.send("ITS ALIVE!!!")
    });
    app.get("/questions/", (req, res) => {
        res.send("ITS ALIVE!!!")
    });



    /*
    UPDATE
    */
    app.patch("/category/", (req, res) => {

    });

    app.patch("/question/", (req, res) => {

    });


     /*
    DELETE
    */
    app.delete("/category", (req, res) => {

    });

    app.delete("/question", (req, res) => {

    });


  return app;
};

module.exports = { setupExpressServer };
