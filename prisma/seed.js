const {categories, questions} = require("./seedData")

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();




async function main() {
  console.log("CREATING...") 
  for(let elem of questions){
    await prisma.question.create({
      data:  elem
    })
  }          
}  
  main()
      .catch((e) => {
       throw e
      })
      .finally(async () => {
          console.log("DISCONNECTING...")
         
        await prisma.$disconnect()
      })