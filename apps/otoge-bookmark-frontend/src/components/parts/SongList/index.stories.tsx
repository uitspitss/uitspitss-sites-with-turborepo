import { ComponentMeta } from '@storybook/react';

import { SongList } from '.';

export default {
  component: SongList,
  args: {
    songs: [
      {
        id: 'song-1',
        title: 'song 1',
        gameId: 'game-1',
      },
      {
        id: 'song-2',
        title: 'song 2',
        gameId: 'game-2',
      },
    ],
  },
} as ComponentMeta<typeof SongList>;

export const Default = {};
