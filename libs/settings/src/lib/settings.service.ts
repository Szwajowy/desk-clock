import { Injectable } from '@nestjs/common';
import { PrismaClient, Settings } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class SettingsService {
  public getSettings(): Promise<Settings[]> {
    return prisma.settings.findMany();
  }
}
