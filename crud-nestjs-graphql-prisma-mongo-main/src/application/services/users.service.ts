import { CreateUserInput } from '@application/dto/create-user.input';
import { UpdateUserInput } from '@application/dto/update-user.input';
import { PrismaService } from '@infra/data/client/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createUserInput: CreateUserInput) {
    return this.prismaService.user.create({
      data: createUserInput,
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        name: updateUserInput.name,
        email: updateUserInput.email,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
