import 'jest-config/jest.setup';

import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from './.storybook/preview';

setGlobalConfig(globalStorybookConfig);
