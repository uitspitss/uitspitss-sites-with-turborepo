/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  post: {
    status: 201;
    resBody: Types.GameEntity;
    reqBody: Types.CreateGameDto;
  };

  get: {
    status: 200;
    resBody: Types.GameEntity[];
  };
};
