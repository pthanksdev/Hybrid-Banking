import { Test, TestingModule } from '@nestjs/testing';
import { TransfersController } from './transfers.controller';
import { TransfersService } from './transfers.service';
import { UnauthorizedException } from '@nestjs/common';
import { AuthPayload, RiskLevel } from '@hybrid-banking/auth-sdk';

describe('TransfersController', () => {
  let controller: TransfersController;
  let mockTransfersService: Partial<TransfersService>;

  beforeEach(async () => {
    mockTransfersService = {
      sendTransfer: jest.fn().mockResolvedValue({ id: 'transfer-1' }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransfersController],
      providers: [
        { provide: TransfersService, useValue: mockTransfersService },
      ],
    }).compile();

    controller = module.get<TransfersController>(TransfersController);
  });

  it('should allow small transfers without step-up auth', async () => {
    const payload: AuthPayload = {
      userId: 'user-1',
      kycStatus: 'verified',
      riskLevel: RiskLevel.LOW,
      mfaEnabled: false, // MFA is false, but amount is small
      roles: ['user'],
    };

    const result = await controller.send({ to: 'user-2', amount: 500, currency: 'USD' }, payload);
    expect(result).toBeDefined();
    expect(mockTransfersService.sendTransfer).toHaveBeenCalled();
  });

  it('should throw UnauthorizedException for large transfers without MFA enabled', async () => {
    const payload: AuthPayload = {
      userId: 'user-1',
      kycStatus: 'verified',
      riskLevel: RiskLevel.LOW,
      mfaEnabled: false, // missing step-up MFA
      roles: ['user'],
    };

    await expect(
      controller.send({ to: 'user-2', amount: 2000, currency: 'USD' }, payload),
    ).rejects.toThrow(UnauthorizedException);
  });

  it('should allow large transfers with MFA enabled', async () => {
    const payload: AuthPayload = {
      userId: 'user-1',
      kycStatus: 'verified',
      riskLevel: RiskLevel.LOW,
      mfaEnabled: true, // has step-up MFA
      roles: ['user'],
    };

    const result = await controller.send({ to: 'user-2', amount: 2000, currency: 'USD' }, payload);
    expect(result).toBeDefined();
  });
});
