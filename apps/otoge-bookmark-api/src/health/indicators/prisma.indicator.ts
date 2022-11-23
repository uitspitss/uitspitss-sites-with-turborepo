import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';

@Injectable()
export class PrismaHealthIndicator extends HealthIndicator {
  constructor(private prismaService: PrismaService) {
    super();
  }

  async checkConnection(key: string): Promise<HealthIndicatorResult> {
    try {
      await this.prismaService.$queryRaw`SELECT 1`;
      return this.getStatus(key, true);
    } catch (e) {
      throw new InternalServerErrorException('db check failed');
    }
  }
}
