import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectSelectionComponent } from './project-selection/project-selection.component';

const routes: Routes = [
  { path: "", redirectTo: "project-selection", pathMatch: "full" },
  { path: 'project-selection', component: ProjectSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
