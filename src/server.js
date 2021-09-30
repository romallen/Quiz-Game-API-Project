const express = require("express")
const {PrismaClient} = require('@prisma/client')
const {categories, questions} = require("../prisma/seedData")
const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');


    const prisma = new PrismaClient()

    async function main() {
        console.log("CREATING...") 

    await prisma.question.create({
        data:  {
            question_id: uuidv4(),
            question: "is test5000?",
                    answer: "yeks",
                    category: "TINkG2",
                    points: 10,
                    difficulty: 11,
        }
      })
    //await prisma.question.deleteMany({})
    console.log("Created: ");            
}   
async function main2() {
    console.log("CREATING...") 
for(let elem of questions){
    await prisma.question.create({
        data:  elem
      })
}


           
}  
      



const setupExpressServer = () => {
  const app = express();
  //app.use(json());

  app.get("/", (req, res) => {
    res.send("ITS ALIVE!!!")
  });

  app.get("/test", async (req, res) => {
     const categories = await prisma.question.findMany({

     })
     
    main().catch((e) => {
        throw e
      })
      .finally(async () => {
        console.log("DISCONNECTING...")
        await prisma.$disconnect()
      })
    res.send(categories)
    prisma.$disconnect()
  });

  

  app.get("/seed", async (req, res) => {
      
      main2().catch((e) => {
          throw e
        })
        .finally(async () => {
            console.log("DISCONNECTING...")
            await prisma.$disconnect()
        })
        const categories = await prisma.question.findMany({})
   res.status(200).send(categories)
   
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
    app.get("/deleteAll", async (req, res) => {
      await prisma.question.deleteMany({})
    });

    app.delete("/question", (req, res) => {

    });






  return app;
};
module.exports = setupExpressServer;
//export default  setupExpressServer ;
