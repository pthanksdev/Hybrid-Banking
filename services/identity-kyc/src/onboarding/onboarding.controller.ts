import { Controller, Post, Get, Body, Param, Query, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '@hybrid-banking/auth-sdk';
import { OnboardingService } from './onboarding.service';
import { RegisterUserDto, UserResponseDto } from './dto/register-user.dto';

@ApiTags('Onboarding')
@Controller('users')
export class OnboardingController {
  constructor(private readonly onboardingService: OnboardingService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, type: UserResponseDto })
  @ApiResponse({ status: 409, description: 'Email already exists' })
  async register(@Body() dto: RegisterUserDto) {
    return this.onboardingService.registerUser(dto);
  }

  @Get(':userId')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({ status: 200, type: UserResponseDto })
  async getUser(@Param('userId') userId: string) {
    return this.onboardingService.getUserProfile(userId);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'List all users' })
  async listUsers(@Query('limit') limit?: string, @Query('offset') offset?: string) {
    return this.onboardingService.listUsers(limit ? +limit : 50, offset ? +offset : 0);
  }
}
