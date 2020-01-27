import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { ProjectSelectionComponent } from './project-selection/project-selection.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProjectSelectionComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
