import { render } from '@testing-library/react';
import { GameWithSongsEntity } from '@/lib/api/@types';

import { GameUpdateForm } from '.';

describe('GameUpdateForm', () => {
  const onSubmit = jest.fn();
  const game: GameWithSongsEntity = { id: 'id', name: 'name', songs: [] };

  it('should render successfully', () => {
    const { baseElement } = render(
      <GameUpdateForm game={game} onSubmit={onSubmit} />,
    );
    expect(baseElement).toBeTruthy();
  });
});
