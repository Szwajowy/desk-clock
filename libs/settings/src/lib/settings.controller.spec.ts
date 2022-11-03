import { Test } from '@nestjs/testing';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';

describe('SettingsController', () => {
  let controller: SettingsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SettingsService],
      controllers: [SettingsController],
    }).compile();

    controller = module.get(SettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
