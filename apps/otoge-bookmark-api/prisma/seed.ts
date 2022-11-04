import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const gameA = await prisma.game.upsert({
    where: { title: 'game a' },
    update: {},
    create: {
      title: 'game a',
      songs: {
        create: {
          title: 'song a',
        },
      },
    },
  });
  const gameB = await prisma.game.upsert({
    where: { title: 'game b' },
    update: {},
    create: {
      title: 'game b',
      songs: {
        create: {
          title: 'song b',
        },
      },
    },
  });
  console.log({ gameA, gameB });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
