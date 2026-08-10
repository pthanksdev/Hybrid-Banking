import { DynamicModule, Module, Provider } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { KycGuard } from './guards/kyc.guard';
import { AuthModuleOptions } from './interfaces/jwt-payload.interface';

@Module({})
export class AuthModule {
  static forRoot(options: AuthModuleOptions): DynamicModule {
    const jwtStrategyProvider: Provider = {
      provide: JwtStrategy,
      useFactory: () => new JwtStrategy(options.jwtSecret),
    };

    return {
      module: AuthModule,
      imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
          secret: options.jwtSecret,
          signOptions: {
            expiresIn: options.jwtExpiresIn || '15m',
          },
        }),
      ],
      providers: [jwtStrategyProvider, JwtAuthGuard, RolesGuard, KycGuard],
      exports: [JwtModule, PassportModule, JwtAuthGuard, RolesGuard, KycGuard],
      global: true,
    };
  }
}
