import 'jest-config/next/jest.setup';
// eslint-disable-next-line
import { loadEnvConfig } from '@next/env';
import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from './.storybook/preview';
import { server } from './src/mocks/server';

loadEnvConfig(process.cwd());

// @ts-expect-error caused by mswDecorator
setGlobalConfig(globalStorybookConfig);

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

// // Print mocked handlers
// server.printHandlers();
