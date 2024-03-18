import { Controller, Post, Body } from '@nestjs/common';
import { LoginRequestDTO } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller({
  version: '1',
  path: 'auth',
})
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/login')
  async login(@Body() loginRequestDTO: LoginRequestDTO) {
    const response = await this.authService.login(loginRequestDTO);
    return response;
  }
}
