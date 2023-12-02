import { Injectable } from '@nestjs/common';
import { User } from '@entities/user.entity';
import { LoginResponseDto } from '@modules/auth/dto/login-response.dto';

@Injectable()
export class AuthService {
  async validateUser(username: string, password: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async login(user: User): Promise<LoginResponseDto> {
    throw new Error('Method not implemented.');
  }
}
