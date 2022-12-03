// eslint-disable-next-line
import { db } from '../db';

export const handlers = [
  ...db.game.toHandlers('rest'),
  ...db.song.toHandlers('rest'),
];

// // MEMO: handlers with orval
// import { getOtogeBookmarkAPIMSW } from '@/lib/api-orval';
// export const handlers = getOtogeBookmarkAPIMSW();
