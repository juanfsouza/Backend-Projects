import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;
}
