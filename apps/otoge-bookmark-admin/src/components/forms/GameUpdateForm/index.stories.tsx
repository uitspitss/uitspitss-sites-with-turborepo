import { ComponentMeta } from '@storybook/react';

import { GameUpdateForm } from '.';

export default {
  component: GameUpdateForm,
  args: {
    onSubmit: async () => {
      console.log('onSubmit');
    },
    game: { id: 'id', name: 'name', songs: [] },
  },
} as ComponentMeta<typeof GameUpdateForm>;

export const Default = {};
