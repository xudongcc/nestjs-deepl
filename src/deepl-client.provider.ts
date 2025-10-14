import { Provider } from '@nestjs/common';
import { DeepLClient } from 'deepl-node';
import { MODULE_OPTIONS_TOKEN } from './deepl.module-definition';
import { DeepLModuleOptions } from './deepl-module-options.interface';

export const DeepLClientProvider: Provider<DeepLClient> = {
  provide: DeepLClient,
  inject: [{ token: MODULE_OPTIONS_TOKEN, optional: true }],
  useFactory: ({ authKey, ...options }: DeepLModuleOptions = {}) => {
    authKey ??= process.env.DEEPL_AUTH_KEY;

    if (!authKey) {
      throw new Error(
        'DeepL API key is missing. Set DEEPL_AUTH_KEY or pass an apiKey option.',
      );
    }

    return new DeepLClient(authKey, {
      sendPlatformInfo: false,
      serverUrl: process.env.DEEPL_SERVER_URL,
      ...options,
    });
  },
};
