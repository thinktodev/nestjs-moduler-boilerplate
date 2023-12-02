import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from '@modules/auth/dto/login.dto';
import { LoginResponseDto } from '@modules/auth/dto/login-response.dto';
import { AuthService } from '@modules/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(protected authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    const user = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user);
  }
}
