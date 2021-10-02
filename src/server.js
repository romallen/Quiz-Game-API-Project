const express = require("express")
const {PrismaClient} = require('@prisma/client')
const {categories, questionSeed, questionSeeds} = require("../prisma/seedData")



  const prisma = new PrismaClient()

  async function createSingle(question) {
    console.log("CREATING...") 
    
    await prisma.question.create({
        data:  question
      });
 
    console.log("Created");            
  }  

  async function createMultiple(questions) {
    console.log("CREATING...") 
    for(let elem of questions){
    
      await prisma.question.create({
        data:  elem
      })
    } 
    console.log("Created");            
  }  

      



const setupExpressServer = () => {
  const app = express();
  app.use(express.json());

    app.get("/api/test", (req, res) => {
      res.send("ITS ALIVE!!!")
    });

 
   
    /*
    CREATE
    */
    app.post("/api/question", async (req, res) => { 
      
      const newQuestion = await prisma.question.create({
          data: req.body,
        })
      
      res.status(200).send(newQuestion);
    });

    app.post("/api/questions", async (req, res) => {
 
        const newQuestions = await prisma.question.createMany({
          data: req.body,
          skipDuplicates: true,
        })

      res.status(200).send(newQuestions);
    });


     /*
    READ
    */
   app.get("/api/question", async (req, res) => {
     
     const result = await prisma.question.findFirst({
       where: req.body,
     })
     res.status(200).send(result)
   });
    
   app.get("/api/questions", async (req, res) => {
      const result = await prisma.question.findMany({
        where: req.body,
      })
      res.status(200).send(result)
    });

 
    /*
    UPDATE
    */
    app.patch("/api/question", async (req, res) => {
      
      const questionID = await prisma.question.findFirst({
        where: req.body[0],
      });
 
      const updateQuestion =  await prisma.question.update({
        where: {
          question_id: questionID.question_id, 
        },
        data: req.body[1],
      });

      res.status(200).send(updateQuestion)
    });

    app.patch("/api/questions", async (req, res) => {
      console.log(typeof Object.keys(req.body[0])[0])
      let key = Object.keys(req.body[0])[0]
      let value = Object.values(req.body[0])[0]

      const updateQuestion =  await prisma.question.updateMany({
        where: {
         

       
        },
        data: req.body[1],
      });

      res.status(200).send(updateQuestion)
    });
 

     /*
    DELETE
    */
    app.delete("/api/question", async (req, res) => {
      const questionID = await prisma.question.findFirst({
        where: req.body,
      });
      
     const deleteQuestion = await prisma.question.delete({
        where: {question_id: questionID.question_id},
      })
        res.status(200).send(deleteQuestion)

    });

    app.delete("/api/questions", async (req, res) => {
      const deleteQuestion = await prisma.question.deleteMany({
        where: req.body,
      })
      res.status(200).send(deleteQuestion)
    });

      app.post("/api/seed", async (req, res) => {
          
        const newQuestions = await prisma.question.createMany({
          data: questionSeeds,
          skipDuplicates: true,
        })

      res.status(200).send(newQuestions);
       
     });

  return app;
};
module.exports = setupExpressServer;
//export default  setupExpressServer ;


// app.get("/seed", async (req, res) => {
          
//   main2().catch((e) => {
//       throw e
//     })
//     .finally(async () => {
//         console.log("DISCONNECTING...")
//         await prisma.$disconnect()
//     })
//     const categories = await prisma.question.findMany({})
// res.status(200).send(categories)

// });