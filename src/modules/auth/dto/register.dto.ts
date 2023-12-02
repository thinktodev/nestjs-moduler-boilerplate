import { IsEmail, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  userName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
