import { Component, OnInit } from '@angular/core';

import { IProject } from '../../typings/Project';

import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: IProject[] = [];

  constructor(private readonly _PROJECTS_SERVICE: ProjectsService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this._PROJECTS_SERVICE
      .getProjects()
      .subscribe(projects => (this.projects = projects));
  }
}
