import type { Config } from '@verdaccio/types';

export interface CustomConfig extends Config {
  foo: string;
}
