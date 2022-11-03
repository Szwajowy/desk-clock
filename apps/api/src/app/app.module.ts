import { DevicesController, DevicesService } from '@desk-clock/devices';
import { SettingsController, SettingsService } from '@desk-clock/settings';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, DevicesController, SettingsController],
  providers: [AppService, DevicesService, SettingsService],
})
export class AppModule {}
