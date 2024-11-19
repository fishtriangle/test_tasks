import { Controller, Patch, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch('users')
  async updateUsers(
    @Body()
    ids: number[],
  ): Promise<number> {
    return this.userService.updateUsers(ids);
  }
}
