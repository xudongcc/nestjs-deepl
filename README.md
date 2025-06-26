# NestJS DeepL Module

[![npm version](https://badge.fury.io/js/nestjs-deepl.svg)](https://badge.fury.io/js/nestjs-deepl)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A NestJS module that provides seamless integration with the DeepL translation API. This module wraps the official DeepL Node.js client and makes it easy to use translation services in your NestJS applications.

## Features

- 🔧 **Easy Integration**: Simple module setup with NestJS dependency injection
- 🌍 **Translation Support**: Full access to DeepL's translation capabilities
- ⚙️ **Configurable**: Flexible configuration options for different environments
- 🔒 **Type Safe**: Built with TypeScript for better development experience
- 📦 **Lightweight**: Minimal overhead with clean architecture

## Installation

```bash
npm install nestjs-deepl deepl-node
# or
yarn add nestjs-deepl deepl-node
# or
pnpm add nestjs-deepl deepl-node
```

**Note**: This module requires `deepl-node` as a peer dependency. Make sure to install it alongside `nestjs-deepl`.

## Prerequisites

- Node.js (v18 or higher)
- NestJS framework
- DeepL API key ([Get one here](https://www.deepl.com/pro-api))

## Quick Start

### 1. Import the Module

```typescript
import { Module } from '@nestjs/common';
import { DeepLModule } from 'nestjs-deepl';

@Module({
  imports: [
    DeepLModule.register({
      authKey: 'your-deepl-api-key',
    }),
  ],
})
export class AppModule {}
```

### 2. Use the DeepL Client

```typescript
import { Injectable } from '@nestjs/common';
import { DeepLClient } from 'deepl-node';

@Injectable()
export class TranslationService {
  constructor(private readonly deepLClient: DeepLClient) {}

  async translateText(text: string, targetLang: string) {
    try {
      const result = await this.deepLClient.translateText(
        text,
        null,
        targetLang,
      );
      return result.text;
    } catch (error) {
      throw new Error(`Translation failed: ${error.message}`);
    }
  }
}
```

## Configuration Options

The module accepts all configuration options from the official DeepL Node.js client:

```typescript
DeepLModule.register({
  authKey: 'your-deepl-api-key',
  serverUrl: 'https://api-free.deepl.com', // Optional: for DeepL Free API
  // Other DeepL client options...
});
```

### Global Module

To make the DeepL client available globally across your application:

```typescript
DeepLModule.register({
  authKey: 'your-deepl-api-key',
  isGlobal: true,
});
```

### Async Configuration

For dynamic configuration (e.g., from environment variables):

```typescript
DeepLModule.registerAsync({
  useFactory: (configService: ConfigService) => ({
    authKey: configService.get('DEEPL_API_KEY'),
  }),
  inject: [ConfigService],
});
```

## API Reference

### DeepLModule

The main module class that provides the DeepL client.

#### Static Methods

- `register(options: DeepLModuleOptions)`: Configure the module with static options
- `registerAsync(options: DeepLModuleAsyncOptions)`: Configure the module with async options

### DeepLModuleOptions

Extends the official DeepL client options:

```typescript
interface DeepLModuleOptions extends DeepLClientOptions {
  authKey: string;
}
```

## Examples

### Basic Translation

```typescript
@Injectable()
export class TranslationService {
  constructor(private readonly deepLClient: DeepLClient) {}

  async translateToGerman(text: string) {
    const result = await this.deepLClient.translateText(text, null, 'DE');
    return result.text;
  }
}
```

### Document Translation

```typescript
@Injectable()
export class DocumentService {
  constructor(private readonly deepLClient: DeepLClient) {}

  async translateDocument(filePath: string, targetLang: string) {
    const result = await this.deepLClient.translateDocument(
      filePath,
      targetLang,
    );
    return result;
  }
}
```

### Usage Statistics

```typescript
@Injectable()
export class UsageService {
  constructor(private readonly deepLClient: DeepLClient) {}

  async getUsage() {
    const usage = await this.deepLClient.getUsage();
    return usage;
  }
}
```

## Environment Variables

It's recommended to use environment variables for your DeepL API key:

```bash
# .env
DEEPL_API_KEY=your-deepl-api-key
```

```typescript
// app.module.ts
DeepLModule.register({
  authKey: process.env.DEEPL_API_KEY,
});
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run tests: `pnpm test`
4. Run linting: `pnpm lint`
5. Build the project: `pnpm build`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Xudong Huang**

- Email: me@huangxudong.com
- Website: https://www.huangxudong.com
- GitHub: [@xudongcc](https://github.com/xudongcc)

## Related Links

- [DeepL API Documentation](https://www.deepl.com/docs-api)
- [DeepL Node.js Client](https://github.com/DeepLcom/deepl-node)
- [NestJS Documentation](https://nestjs.com/)
- [NestJS Module Guide](https://docs.nestjs.com/modules)

## Support

If you encounter any issues or have questions, please:

1. Check the [DeepL API documentation](https://www.deepl.com/docs-api)
2. Search existing [issues](https://github.com/xudongcc/nestjs-deepl/issues)
3. Create a new issue with detailed information

---

Made with ❤️ for the NestJS community
