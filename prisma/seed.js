import { categories } from "./seedData";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.category.create({
        data: categories
    })
    }
    
    main()
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await prisma.$disconnect()
      })