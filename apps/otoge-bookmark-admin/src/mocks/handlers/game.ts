import { rest } from 'msw';
import { db } from '../db';

export const handlers = [
  rest.get('**/games', (req, res, ctx) => {
    return res(ctx.json(db.game.findMany({})));
  }),
];
