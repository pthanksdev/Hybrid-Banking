import { DynamicModule, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LedgerClient } from './ledger.client';

export interface LedgerModuleOptions {
  baseUrl: string;
  timeout?: number;
}

@Module({})
export class LedgerModule {
  static forRoot(options: LedgerModuleOptions): DynamicModule {
    return {
      module: LedgerModule,
      imports: [
        HttpModule.register({
          baseURL: options.baseUrl,
          timeout: options.timeout || 5000,
          headers: { 'Content-Type': 'application/json' },
        }),
      ],
      providers: [LedgerClient],
      exports: [LedgerClient],
      global: true,
    };
  }
}
