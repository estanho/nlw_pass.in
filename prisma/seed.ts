import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: '39161783-9d1a-4ee4-a81f-7b0144ff84b6',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento para devs apaixonados(as) por código!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded.');
  prisma.$disconnect();
});