import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestDTO, LoginResponseDTO } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userData: LoginRequestDTO): Promise<LoginResponseDTO> {
    const user = await this.usersService.findUser(userData.email);

    if (!user) {
      throw new HttpException(
        'Credentials are not valid',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isPasswordCorrect = await compare(userData.password, user.password);

    if (!isPasswordCorrect) {
      throw new HttpException(
        'Credentials are not valid',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...payload } = user;
    const access_token = await this.jwtService.signAsync(payload);
    return { access_token };
  }
}
