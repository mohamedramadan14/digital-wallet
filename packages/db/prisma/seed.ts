import prisma from '../index';
import { addBalance, addOnRampTransaction, insertUser } from './utils/db';

async function main() {
  console.log('running seed script');
  const firstUser = insertUser(prisma, 'alice', 'a@a.com', '1111111111', 'alice');
  const secondUser = insertUser(prisma, 'bob', 'b@b.com', '2222222222', 'bob');

  const [alice, bob] = await Promise.all([firstUser, secondUser]);
  if (!alice || !bob) throw new Error('users not created');
  
  addBalance(prisma, alice, 20000, 0);
  addBalance(prisma, bob, 2000, 0);
  addOnRampTransaction(prisma, alice, new Date(), "Success", 20000, "token__1", "HDFC Bank");
  addOnRampTransaction(prisma, bob, new Date(), "Success", 2000, "token__2", "HDFC Bank");

  console.log("Database Seeded successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })