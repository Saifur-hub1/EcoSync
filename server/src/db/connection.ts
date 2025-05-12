import {PrismaClient} from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Define an async function to connect to the database
async function checkDatabaseConnection(){
    try{
        // Execute a simple query 
        const result = await prisma.$queryRaw`SELECT 1+1`;

        // Log success message if the query is successful
        console.log('Database connection successful:', result);
    } catch (error){
        // Handle any error that occur
        console.error('Database connection error:', error);
    } finally {
        // Disconnect the Prisma Client
        await prisma.$disconnect();
    }
}

// Export the function
export default  checkDatabaseConnection;