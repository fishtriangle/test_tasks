import { Module } from '@nestjs/common';
import { UserController } from './user.contoller';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  imports: [],
})
export class UserModule {}
