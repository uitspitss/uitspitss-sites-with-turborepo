import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';

const prisma = new PrismaClient();

const users: User[] = [
  {
    id: '9b7ec578-fdec-434c-80a4-476e13df4768',
    email: 'admin@example.com',
    createdAt: new Date('2022-11-16T10:43:51Z'),
    updatedAt: new Date('2022-11-16T10:43:51Z'),
    refreshToken: null,
    role: 'ADMIN',
    password: '$2b$10$KNrXcSbH3Oovlue8vX/A1OIFh28JLKF8h75wQJbd4r.2ALtFgrROi',
  },
  {
    id: 'e87a2f92-b38c-462b-9215-9ef0b4464536',
    email: 'test@example.com',
    createdAt: new Date('2022-11-16T10:43:51Z'),
    updatedAt: new Date('2022-11-16T10:43:51Z'),
    refreshToken: null,
    role: 'USER',
    password: '$2b$10$KNrXcSbH3Oovlue8vX/A1OIFh28JLKF8h75wQJbd4r.2ALtFgrROi',
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
  const queries = 'abcde'.split('').map((v) =>
    prisma.game.upsert({
      where: { name: `game ${v}` },
      update: {},
      create: {
        name: `game ${v}`,
        songs: {
          create: '1234567890'.split('').map((i) => ({
            name: `song ${v} ${i}`,
            categories: {
              create: [
                {
                  category: {
                    create: {
                      name: `category:${i}`,
                    },
                  },
                },
              ],
            },
          })),
        },
      },
    }),
  );
  const result = await prisma.$transaction(queries);
  console.log(result);
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
