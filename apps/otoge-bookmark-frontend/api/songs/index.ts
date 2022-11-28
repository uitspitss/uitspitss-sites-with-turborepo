/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  post: {
    status: 201;
    resBody: Types.SongEntity;
    reqBody: Types.CreateSongDto;
  };

  get: {
    status: 200;
    resBody: Types.SongEntity[];
  };
};
