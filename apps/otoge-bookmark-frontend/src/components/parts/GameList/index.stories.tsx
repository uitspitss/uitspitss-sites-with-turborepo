import { ComponentMeta } from '@storybook/react';

import { GameList } from '.';

export default {
  component: GameList,
  args: {
    games: [
      {
        id: 'game-1',
        title: 'game 1',
      },
      {
        id: 'game-2',
        title: 'game 2',
      },
    ],
  },
} as ComponentMeta<typeof GameList>;

export const Default = {};
