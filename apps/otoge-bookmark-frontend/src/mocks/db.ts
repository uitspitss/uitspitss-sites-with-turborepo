import { factory, primaryKey, oneOf, manyOf } from '@mswjs/data';
import { faker } from '@faker-js/faker';

const EACH_DATA_COUNT = 3;

faker.seed(0);

export const db = factory({
  game: {
    id: primaryKey(faker.datatype.uuid),
    name: faker.random.word,
    songs: manyOf('song'),
  },
  song: {
    id: primaryKey(faker.datatype.uuid),
    name: faker.music.songName,
    game: oneOf('game'),
    categories: manyOf('category'),
  },
  user: {
    id: primaryKey(faker.datatype.uuid),
    name: faker.name.fullName,
  },
  category: {
    id: primaryKey(faker.datatype.uuid),
    name: faker.word.adjective,
    game: manyOf('game'),
    song: manyOf('song'),
  },
});

// games
for (let i = 1; i <= EACH_DATA_COUNT; i++) {
  db.game.create({
    name: `Game ${i}`,
  });
}

// songs
for (let i = 1; i <= EACH_DATA_COUNT; i++) {
  const game = db.game.findFirst({ where: { name: { equals: 'Game 1' } } });
  if (game) {
    db.song.create({
      name: `Song ${i}`,
      game,
      categories: [...Array(30).keys()].map(() => db.category.create()),
    });
    // NOTE: circular relation error below
    // db.game.update({
    //   where: {
    //     id: {
    //       equals: game.id,
    //     },
    //   },
    //   data: {
    //     songs: [...game.songs, song],
    //   },
    // });
  }
}
