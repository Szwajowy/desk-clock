import { DevicesController, DevicesService } from '@desk-clock/devices';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, DevicesController],
  providers: [AppService, DevicesService],
})
export class AppModule {}
