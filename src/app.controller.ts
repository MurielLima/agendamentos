import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { AuthService } from './common/guard/auth/auth.service';
import { JwtAuthGuard } from './common/guard/auth/jwt/jwt-auth.guard';
import { LocalAuthGuard } from './common/guard/auth/local/local-auth.guard';

import { UserDto } from './users/users.service';

@ApiBearerAuth()
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: UserDto })
  @Post('auth/login')
  async login(@Body() user: UserDto) {
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
