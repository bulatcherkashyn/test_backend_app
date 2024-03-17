import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';

@Controller({
  version: '1',
  path: '',
})
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/get-user/:id')
  getUser(@Param('id') id: string): string {
    return id;
  }

  @Post('/add-user')
  async addUser(@Body() createUserDto: CreateUserDto): Promise<string> {
    await this.userService.createUser(createUserDto);
    return 'Successfully created user';
  }
}
