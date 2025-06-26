import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './deepl.module-definition';
import { DeepLClientProvider } from './deepl-client.provider';

@Module({
  providers: [DeepLClientProvider],
  exports: [DeepLClientProvider],
})
export class DeepLModule extends ConfigurableModuleClass {}
