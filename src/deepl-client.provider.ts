import { Provider } from '@nestjs/common';
import { DeepLClient } from 'deepl-node';
import { MODULE_OPTIONS_TOKEN } from './deepl.module-definition';
import { DeepLModuleOptions } from './deepl-module-options.interface';

export const DeepLClientProvider: Provider<DeepLClient> = {
  provide: DeepLClient,
  inject: [MODULE_OPTIONS_TOKEN],
  useFactory: ({ authKey, ...options }: DeepLModuleOptions) => {
    return new DeepLClient(authKey, {
      sendPlatformInfo: false,
      ...options,
    });
  },
};
