import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';

const prisma = new PrismaClient();

const users: User[] = [
  {
    id: '9b7ec578-fdec-434c-80a4-476e13df4768',
    email: 'test@example.com',
    password: '$2b$10$AfuV7TCwFxbBLm7t37d7Ouhnfnrxgq1RzRx1OsnBQMrq28ll/GJJi',
    createdAt: new Date('2022-11-16T10:43:51Z'),
    updatedAt: new Date('2022-11-16T10:43:51Z'),
    refreshToken: null,
  },
  {
    id: 'e87a2f92-b38c-462b-9215-9ef0b4464536',
    email: 'hoge@example.com',
    password: '$2b$10$AfuV7TCwFxbBLm7t37d7Ouhnfnrxgq1RzRx1OsnBQMrq28ll/GJJi',
    createdAt: new Date('2022-11-16T10:43:51Z'),
    updatedAt: new Date('2022-11-16T10:43:51Z'),
    refreshToken: null,
  },
];

async function main() {
  // users
  for (const u of users) {
    const user = await prisma.user.upsert({
      where: { id: u.id },
      update: {},
      create: {
        ...u,
      },
    });
    console.log({ user });
  }

  // games, songs
  for (const v of 'ab'.split('')) {
    const game = await prisma.game.upsert({
      where: { title: `game ${v}` },
      update: {},
      create: {
        title: `game ${v}`,
        songs: {
          create: {
            title: `song ${v}`,
          },
        },
      },
    });
    console.log({ game });
  }
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
