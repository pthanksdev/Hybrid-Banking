import { Injectable } from '@nestjs/common';

@Injectable()
export class FeeEstimationService {
  async getGasEstimate(chain: string) {
    const baseGwei = chain.toLowerCase() === 'ethereum' ? 25 : 1;
    
    return {
      chain,
      slow: { maxFeePerGas: `${baseGwei}000000000`, maxPriorityFeePerGas: '1000000000', estimatedSecs: 60 },
      standard: { maxFeePerGas: `${baseGwei + 5}000000000`, maxPriorityFeePerGas: '1500000000', estimatedSecs: 15 },
      fast: { maxFeePerGas: `${baseGwei + 15}000000000`, maxPriorityFeePerGas: '3000000000', estimatedSecs: 5 },
      baseFeePerGas: `${baseGwei}000000000`,
      asOf: new Date().toISOString(),
    };
  }
}
