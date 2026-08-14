import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { VerificationModule } from './verification/verification.module';
import { ScreeningModule } from './screening/screening.module';

@Module({
  imports: [PrismaModule, OnboardingModule, VerificationModule, ScreeningModule],
})
export class AppModule {}
