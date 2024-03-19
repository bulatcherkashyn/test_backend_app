import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './models/user.model';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller({
  version: '1',
  path: '',
})
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/get-user/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    const user = await this.userService.findUserByID(id);
    return user;
  }

  @Post('/add-user')
  async addUser(@Body() createUserDto: CreateUserDto) {
    await this.userService.createUser(createUserDto);
    return {
      message: 'User successfully created',
    };
  }
}
