// src/some/some.module.ts
import { Module } from '@nestjs/common';
import { SomeController } from './some.controller';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [SomeController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: PermissionsGuard,
    },
  ],
})
export class SomeModule { }