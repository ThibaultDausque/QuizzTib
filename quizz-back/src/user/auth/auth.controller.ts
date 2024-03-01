import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/users.dto';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}

  public async userLog(@Body() user: CreateUserDto) {
    await this.authservice.signIn(user.username, user.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.authservice.signIn(
      createUserDto.username,
      createUserDto.password,
    );
  }
}
