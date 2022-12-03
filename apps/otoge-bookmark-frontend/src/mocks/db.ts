import { factory, primaryKey, oneOf, manyOf } from '@mswjs/data';
import { faker } from '@faker-js/faker';

const EACH_DATA_COUNT = 3;

faker.seed(0);

export const db = factory({
  game: {
    id: primaryKey(faker.datatype.uuid),
    title: faker.random.word,
    songs: manyOf('song'),
  },
  song: {
    id: primaryKey(faker.datatype.uuid),
    title: faker.music.songName,
    game: oneOf('game'),
    gameId: String,
  },
  user: {
    id: primaryKey(faker.datatype.uuid),
    name: faker.name.fullName,
  },
});

// games
for (let i = 1; i <= EACH_DATA_COUNT; i++) {
  db.game.create({ title: `Game ${i}` });
}

// songs
for (let i = 1; i <= EACH_DATA_COUNT; i++) {
  const game = db.game.findFirst({ where: { title: { equals: 'Game 1' } } });
  if (game) {
    db.song.create({ title: `Song ${i}`, game, gameId: game.id });
  }
}
