import { Injectable } from '@nestjs/common';
import { PrismaClient, Device } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class DevicesService {
  public getDevices(): Promise<Device[]> {
    return prisma.device.findMany();
  }
}
