import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginRequestDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class LoginResponseDTO {
  access_token: string;
}
