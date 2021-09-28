const express = require("express");
const { PrismaClient } = require('@prisma/client')







const setupExpressServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("ITS ALIVE!!!")
  });

  app.get("/test", (req, res) => {
    // const categories = await prisma.post.findMany({

    // })
    res.send("ITS ALIVE!!!")
  });
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




    const prisma = new PrismaClient()
    let result;
    async function main() {
    //   const newQuest = await prisma.category.create({
    //       data: {
    //           category_id: "edewdwdw",
    //           category: "TESTING",
    //           isValidCategory: true,
    //           questions: {
    //               create: {
    //                 question_id: "wrf",
    //                 question: "is this a test?",
    //                 answer: "yes",
    //                 points: 100,
    //                 difficulty: 1,
    //               },
    //           },
    //       },
    //   })
    // console.log("Created: ", newQuest);
    }
    
    main()
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await prisma.$disconnect()
      })


  return app;
};

module.exports = { setupExpressServer };
