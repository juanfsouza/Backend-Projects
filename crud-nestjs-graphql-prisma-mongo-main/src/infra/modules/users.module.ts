import { Module } from '@nestjs/common';
import { UsersService } from '../../application/services/users.service';
import { UsersResolver } from '../../presenters/resolvers/users.resolver';

@Module({
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
