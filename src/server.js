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
  app.use(express.json());

    app.get("/test", (req, res) => {
      res.send("ITS ALIVE!!!")
    });

 
   
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
   app.get("/question/", async (req, res) => {
     
     const result = await prisma.question.findFirst({
       where: req.body,
     })
     res.send(result)
   });
    
   app.get("/questions/", async (req, res) => {
      const result = await prisma.question.findMany({
        where: req.body,
      })
      res.send(result)
    });


   
 
    /*
    UPDATE
    */
    app.patch("/question/", async (req, res) => {
      const questionID = await prisma.question.findFirst({
        where: {
          category : "food",
          points: 200,
        },
      });
 
      const updateQuestion =  await prisma.question.update({
        where: {
          question_id: questionID.question_id, 
        },
        data: {
          points: 2000,
        },
      });

      res.sendStatus(200)
    });

    app.patch("/questions/", async (req, res) => {

    });
 

     /*
    DELETE
    */
    app.delete("/question", async (req, res) => {
      await prisma.question.deleteMany({
        where: req.body,
      })
    });

    app.delete("/questions", async (req, res) => {
      await prisma.question.deleteMany({
        where: req.body,
      })
    });


  return app;
};
module.exports = setupExpressServer;
//export default  setupExpressServer ;



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