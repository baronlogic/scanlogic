import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-project-selection',
  templateUrl: './project-selection.component.html',
  styleUrls: ['./project-selection.component.scss'],
})
export class ProjectSelectionComponent implements OnInit {

  user: any;
  projects: any;

  //This handles the mat-progress-bar
  bProjects = true;
  //This handles the error response when loading projects
  bError = false;

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    if(!localStorage.getItem('userLogged')){
      this.goToLogin();
      return;
    }
    else{
      this.user = JSON.parse(localStorage.getItem('userLogged'));
      //console.log(this.user);
      this.getProjects(this.user.clientId);
    }
  }

  openSnackBar(message: string){
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  goToLogin(){
    this.router.navigate(['/auth']);
  }

  goToSelectSetup(){
    this.router.navigate(['/pages/select']);
  }

  getProjects(clientId: string){
    this.projectsService.getAllProjectRecords(clientId)
    .subscribe(
      res => {
        this.projects = res;
        console.log(this.projects);
        this.bProjects = false;
      },
      err => {
        console.log(err);
        this.bError = true;
        this.bProjects = false;
        this.openSnackBar(err.message);
      }
    );
  }

  selectProject(project: any){
    this.user.projectId = project;
    localStorage.setItem('userLogged', JSON.stringify(this.user));
    this.goToSelectSetup();
  }

  loadProjects(){
    this.bProjects = true;
    this.bError = false;
    this.getProjects(this.user.clientId);
  }

}
