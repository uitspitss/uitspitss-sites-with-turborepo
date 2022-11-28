/* eslint-disable */
export type Methods = {
  get: {
    status: 200;

    /** The Health Check is successful */
    resBody: {
      status: string;

      info: {
        [key: string]: {
          status: string;
          [key: string]: string;
        };
      } | null;

      error: {
        [key: string]: {
          status: string;
          [key: string]: string;
        };
      } | null;

      details: {
        [key: string]: {
          status: string;
          [key: string]: string;
        };
      };
    };
  };
};
