import { Module } from '@hestjs/core';
import { UsersModule } from './modules/users.module';

@Module({
  imports: [UsersModule]
})
export class AppModule {}