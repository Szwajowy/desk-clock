import { Component } from '@angular/core';
import { Settings } from '@prisma/client';
import { Observable } from 'rxjs';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'desk-clock-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  public $settings: Observable<Settings[]> = this.settingsService.getSettings();

  constructor(public settingsService: SettingsService) {}
}
