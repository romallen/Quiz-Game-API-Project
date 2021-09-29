//import  categories  from "./seedData";
const categories = require("./seedData")
//import  { PrismaClient } from "@prisma/client";
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const data = categories.categories;


console.log(data)
async function main() {
    console.log("CREATING...") 
  
    prisma.question.create({
        data: data
    })
    console.log( await prisma.question.findMany())
   
    }
   await main()
      .catch((e) => {
       throw e
      })
      .finally(async () => {
          console.log("DISCONNECTING...")
         
        await prisma.$disconnect()
      })