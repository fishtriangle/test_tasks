import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async updateUsers(ids: number[]): Promise<number> {
    const orParam = ids.map((id) => ({ id }));
    await this.prisma.user.updateMany({
      data: {
        problem: false,
      },
      where: {
        OR: orParam,
      },
    });
    const userWithProblemQty = await this.prisma.user.count({
      where: {
        problem: true,
      },
    });
    return userWithProblemQty;
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
