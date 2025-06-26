import { DeepLClientOptions } from 'deepl-node';

export interface DeepLModuleOptions extends DeepLClientOptions {
  authKey: string;
}
