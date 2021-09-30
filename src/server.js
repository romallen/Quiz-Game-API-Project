const express = require("express")
const {PrismaClient} = require('@prisma/client')
const {categories, questions} = require("../prisma/seedData")
const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');


    const prisma = new PrismaClient()

  async function createSingle(question) {
    console.log("CREATING...") 
    question.question_id = uuidv4();
    await prisma.question.create({
        data:  question
      });
 
    console.log("Created");            
  }  

  async function createMultiple(questions) {
    console.log("CREATING...") 
    for(let elem of questions){
      elem.question_id = uuidv4();
      await prisma.question.create({
        data:  elem
      })
    } 
    console.log("Created");            
  }  

      



const setupExpressServer = () => {
  const app = express();
  //app.use(json());

  app.get("/test", (req, res) => {
    res.send("ITS ALIVE!!!")
  });


  
//   app.get("/seed", async (req, res) => {
      
//       main2().catch((e) => {
//           throw e
//         })
//         .finally(async () => {
//             console.log("DISCONNECTING...")
//             await prisma.$disconnect()
//         })
//         const categories = await prisma.question.findMany({})
//    res.status(200).send(categories)
   
//  });


    /*
    CREATE
    */
    app.post("/question/", async (req, res) => {
        const newQuestion = await prisma.question.create({
          data: req.body,
        })
       

      res.sendStatus(200).send(newQuestion);
    });

    app.post("/questions/", async (req, res) => {
      const newQuestions = await prisma.question.createMany({
        data: req.body,
        skipDuplicates: true,
      })
     

    res.sendStatus(200).send(newQuestions);
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
    app.get("/deleteAll", async (req, res) => {
      await prisma.question.deleteMany({})
    });

    app.delete("/question", (req, res) => {

    });






  return app;
};
module.exports = setupExpressServer;
//export default  setupExpressServer ;
