/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  post: {
    status: 201;
    resBody: Types.UserEntity;
    reqBody: Types.CreateUserDto;
  };

  get: {
    status: 200;
    resBody: Types.UserEntity[];
  };
};
