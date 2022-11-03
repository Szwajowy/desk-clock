import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
})
export class UiModule {}
