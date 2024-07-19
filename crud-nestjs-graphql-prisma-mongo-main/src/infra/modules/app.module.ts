import { AppService } from '@application/services/app.service';
import { Module } from '@nestjs/common';
import { DataModule } from './data.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users.module';

@Module({
  imports: [
    DataModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
  ],
  providers: [AppService],
})
export class AppModule {}
